import json

from django.http.response import HttpResponseNotFound, JsonResponse, \
    HttpResponse
from django.shortcuts import render

from app.models import Task


def index(request):
    return render(request, "index.html")


def tasks(request):
    methods = {
        "GET": _show_tasks,
        "POST": _create_task,
    }
    if request.method not in methods:
        return HttpResponseNotFound

    response = methods[request.method](request)
    response["Access-Control-Allow-Origin"] = "*"
    return response


def _show_tasks(request):
    return JsonResponse([{
        "id": t.id,
        "text": t.text,
        "done": t.done,
    } for t in Task.objects.order_by("-id")], safe=False)


def tasks_with_id(request, task_id):
    if request.method == "OPTIONS":
        response = HttpResponse()
        response["Access-Control-Allow-Origin"] = "*"
        response["Access-Control-Allow-Methods"] = "GET,POST,OPTIONS,PUT,DELETE"
        return response

    methods = {
        "PUT": _update_task,
        "DELETE": _destroy_task,
    }
    if request.method not in methods:
        return HttpResponseNotFound

    response = methods[request.method](request, task_id)
    response["Access-Control-Allow-Origin"] = "*"
    return response


def _create_task(request):
    request_data = json.loads(request.body.decode())
    new_task = Task.objects.create(text=request_data["text"])
    return JsonResponse({
        "id": new_task.id,
        "text": new_task.text,
        "done": new_task.done,
    })


def _update_task(request, task_id):
    request_data = json.loads(request.body.decode())

    task = Task.objects.get(id=task_id)
    task.text = request_data["text"]
    task.done = request_data["done"]
    task.save()

    return JsonResponse({"id": task.id, "text": task.text, "done": task.done})


def _destroy_task(request, task_id):

    task = Task.objects.get(id=task_id)
    task.delete()

    return JsonResponse({"id": task_id})
