import requests as r
import json
from helpers import *
from token import *

from qa.token import bearer_token

url = "https://cl22cah7a95835501s60isefhuq-server-vn57etnuya-ue.a.run.app/api"
access_token = {"Authorization": bearer_token()}
auth_url = f"{url}/login"
users_url = f"{url}/users"
housing_offering_url = f"{url}/housingOfferings"
housing_applicant_url = f"{url}/housingApplicants"
job_offering_url = f"{url}/jobOfferings"
job_applicant_url = f"{url}/jobApplicants"

auth_payload = {
  "username": "admin",
  "password": "admin"
}

def users_payload(username):
    return  {
                "description": "test_user",
                "first_name": "Test",
                "last_name": "User",
                "password": "test_password",
                "roles": "user",
                "username": username
            }

def get_user_id(username):
    get_users_url = f"{users_url}?where%5Busername%5D[equals]={username}"
    get_users = r.get(get_users_url, headers=access_token)
    tmp = json.loads(get_users.text)
    return str(tmp[0]["id"])

def get_job_offering_id(id):
    get_job_offering_url = f"{job_offering_url}?where%5Bauthor_id%5D[id]={id}"
    get_job_offering = r.get(get_job_offering_url, headers=access_token)
    tmp = json.loads(get_job_offering.text)
    return str(tmp[0]["id"])

def get_housing_offering_id(id):
    get_housing_offering_url = f"{housing_offering_url}?where%5Bauthor_id%5D[id]={id}"
    get_housing_offering = r.get(get_housing_offering_url, headers=access_token)
    tmp = json.loads(get_housing_offering.text)
    return str(tmp[0]["id"])

def housing_offering_payload(id):
    return  {
            "address": "test_address",
            "author_id": { "id": id },
            "city": "test_city",
            "description": f"test_description{id}",
            "price": 1000,
            "rooms_number": 2,
            "size": 50,
            "title": "test_flat"
            }

def job_offering_payload(id):
    return {
            "author_id": { "id": id },
            "city": "test_city",
            "description": f"test_description{id}",
            "max_salary": 2000,
            "min_salary": 1000,
            "position_level": "test_level",
            "title": "test_title",
            "working_mode": "remote"
            }


def main():
    # auth = r.post(auth_url, data = auth_payload, headers=access_token)
    #get_users = r.get(users_url, headers=access_token)
    for i in range(3):
        username = f"test_user_{timestamp()}"
        r.post(users_url, data = users_payload(username))
        id = get_user_id(username)
        #r.post(housing_offering_url, json=housing_offering_payload(id), headers=access_token)
        r.post(job_offering_url, json=job_offering_payload(id), headers=access_token)
    

if __name__=="__main__":
    main()