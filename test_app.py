import pytest
from app import app


@pytest.fixture
def client():
    with app.test_client() as client:
        yield client


def test_index(client):
    response = client.get("/")
    assert response.status_code == 200


def test_tuto_ck3(client):
    response = client.get("/tuto-ck3")
    assert response.status_code == 200


def test_mentions_legales(client):
    response = client.get("/mentions-legales")
    assert response.status_code == 200


def test_confidentialite(client):
    response = client.get("/confidentialite")
    assert response.status_code == 200
