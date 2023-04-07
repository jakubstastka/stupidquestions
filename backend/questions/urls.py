from django.urls import path

from .views import (
    StupidQuestionItemCreateView,
    StupidQuestionItemDetailView,
    StupidQuestionItemListView,
)

urlpatterns = [
    path("questions/", StupidQuestionItemListView.as_view(), name="questions-list"),
    path(
        "questions/<uuid:pk>/",
        StupidQuestionItemDetailView.as_view(),
        name="question-detail",
    ),
    path("questions/ask", StupidQuestionItemCreateView.as_view(), name="question-ask"),
]
