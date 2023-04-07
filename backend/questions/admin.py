from django.contrib import admin

from questions.models import StupidQuestionItem, StupidQuestionRequest


@admin.action(description="Make Question from Request")
def question_from_request(modeladmin, request, queryset):
    for question_request in queryset:
        StupidQuestionItem.objects.create(question=question_request.question)

        question_request.delete()


@admin.register(StupidQuestionItem)
class StupidQuestionItemAdmin(admin.ModelAdmin):
    list_display = ["__str__"]


@admin.register(StupidQuestionRequest)
class StupidQuestionRequestAdmin(admin.ModelAdmin):
    list_display = ["__str__"]
    actions = [question_from_request]
