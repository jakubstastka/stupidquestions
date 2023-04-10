import uuid

from django.db import models


class CreatedUpdatedBaseModel(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)

    class Meta:
        abstract = True
        ordering = ["-created"]


class StupidQuestionItem(CreatedUpdatedBaseModel):
    question = models.TextField()
    answer = models.TextField()
    score = models.SmallIntegerField(default=0)
    published = models.BooleanField(default=False)

    def __str__(self):
        return self.question[:100]


class StupidQuestionRequest(CreatedUpdatedBaseModel):
    question = models.TextField()

    def __str__(self):
        return self.question[:100]
