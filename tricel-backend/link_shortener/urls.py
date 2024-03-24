from django.urls import path, include
from rest_framework import routers
from link_shortener import views

router = routers.DefaultRouter()
router.register(r"links", views.LinkShortenerView, "links")

urlpatterns = [path("api/v1/", include(router.urls))]
