FROM python:3.10

ENV PYTHONUNBUFFERED=1

COPY requirements.txt .

RUN pip install gunicorn
RUN pip install -r requirements.txt
COPY . .
RUN ["chmod", "+x", "wsgi-entrypoint.sh"]
ENTRYPOINT ["sh", "wsgi-entrypoint.sh"]
