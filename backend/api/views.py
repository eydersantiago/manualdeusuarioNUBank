from django.http import JsonResponse

def hola_mundo(request):
    return JsonResponse({"mensaje": "Hola desde Django 🚀"})