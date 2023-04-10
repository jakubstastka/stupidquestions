from rest_framework import generics, status
from rest_framework.response import Response
from rest_framework.views import APIView

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


class StupidQuestionItemUpdateScoreView(APIView):
    def patch(self, request, pk, format=None):
        instance = StupidQuestionItem.objects.filter(pk=pk, published=True).first()
        if not instance:
            return Response(
                {"detail": "Question not found."}, status=status.HTTP_404_NOT_FOUND
            )

        score_action = request.query_params.get("score_action")

        if score_action == "increment":
            instance.score += 1
        elif score_action == "decrement":
            instance.score -= 1
        else:
            return Response(
                {"detail": "Invalid score action."}, status=status.HTTP_400_BAD_REQUEST
            )

        instance.save()

        return Response({"detail": "Score updated."}, status=status.HTTP_200_OK)
