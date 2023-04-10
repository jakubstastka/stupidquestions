from rest_framework import serializers

from .models import StupidQuestionItem, StupidQuestionRequest


class StupidQuestionItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = StupidQuestionItem
        fields = ["id", "created", "question", "answer", "score"]


class StupidQuestionRequestSerializer(serializers.ModelSerializer):
    class Meta:
        model = StupidQuestionRequest
        fields = ["question"]
