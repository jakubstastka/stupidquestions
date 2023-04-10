from django.urls import path

from .views import (
    StupidQuestionItemCreateView,
    StupidQuestionItemDetailView,
    StupidQuestionItemListView,
    StupidQuestionItemUpdateScoreView,
)

urlpatterns = [
    path("questions/", StupidQuestionItemListView.as_view(), name="questions-list"),
    path(
        "questions/<uuid:pk>/",
        StupidQuestionItemDetailView.as_view(),
        name="question-detail",
    ),
    path(
        "questions/<uuid:pk>/score",
        StupidQuestionItemUpdateScoreView.as_view(),
        name="question-score-update",
    ),
    path("questions/ask", StupidQuestionItemCreateView.as_view(), name="question-ask"),
]
