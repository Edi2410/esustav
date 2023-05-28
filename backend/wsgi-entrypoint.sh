./manage.py makemigrations
./manage.py migrate
./manage.py collectstatic --noinput
gunicorn settings.wsgi --bind 0.0.0.0:8000 --workers 4 --threads 4
