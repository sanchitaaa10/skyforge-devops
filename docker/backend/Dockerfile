FROM python:3.12-slim

WORKDIR /app

COPY app/backend/requirements.txt .

RUN pip install --no-cache-dir -r requirements.txt

COPY app/backend .

EXPOSE 5001

CMD ["python", "app.py"]