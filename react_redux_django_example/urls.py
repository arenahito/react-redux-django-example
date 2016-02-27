from django.conf.urls import url
from app import views

urlpatterns = [
    url(r'^$', views.index),

    url(r'^api/tasks$', views.tasks),
    url(r'^api/tasks/(?P<task_id>[0-9]+)$', views.tasks_with_id),
]
