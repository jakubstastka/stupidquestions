from .base import *
from dotenv import load_dotenv

load_dotenv()

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql',
        'NAME': os.getenv('DATABASE_NAME'),
        'USER': os.getenv('DATABASE_USER'),
        'PASSWORD': os.getenv('DATABASE_PASSWORD'),
        'HOST': os.getenv('DATABASE_HOST'),
        'PORT': os.getenv('DATABASE_PORT'),
    }
}

DEBUG = False

ALLOWED_HOSTS = ['blbyotazky.cz', 'www.blbyotazky.cz']

CORS_ORIGIN_WHITELIST = [
        'https://blbyotazky.cz',
        'https://www.blbyotazky.cz',
    ]
