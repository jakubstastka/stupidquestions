from rest_framework import generics

from .models import StupidQuestionItem, StupidQuestionRequest
from .serializers import StupidQuestionItemSerializer, StupidQuestionRequestSerializer


class StupidQuestionItemListView(generics.ListAPIView):
    queryset = StupidQuestionItem.objects.filter(published=True)
    serializer_class = StupidQuestionItemSerializer


class StupidQuestionItemDetailView(generics.RetrieveAPIView):
    queryset = StupidQuestionItem.objects.filter(published=True)
    serializer_class = StupidQuestionItemSerializer


class StupidQuestionItemCreateView(generics.CreateAPIView):
    queryset = StupidQuestionRequest.objects.all()
    serializer_class = StupidQuestionRequestSerializer
