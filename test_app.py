import pytest
from app import app


@pytest.fixture
def client():
    with app.test_client() as client:
        yield client


def test_index(client):
    response = client.get("/")
    assert response.status_code == 200


def test_ck3_tutorial(client):
    response = client.get("/ck3_tutorial")
    assert response.status_code == 200


def test_legal_notice(client):
    response = client.get("/legal_notice")
    assert response.status_code == 200


def test_privacy(client):
    response = client.get("/privacy")
    assert response.status_code == 200
