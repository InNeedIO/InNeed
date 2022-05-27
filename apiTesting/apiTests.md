# Users
## get api/users
{
  "id": {
    "equals": "cl3omhz38005401s6oa5rq7me"
  }
}
## get api/users/{id}
cl3omhz38005401s6oa5rq7me 
działa 
## patch api/users/{id}
działa
## delete 
działa

## get api/users/{id}/housing_applicants
działa
## post api/users/{id}/housing_applicants
jak dałem body [
  {
    "house_offeringI_id": {
      "id": "cl3on1vlb001401s6u1xm1i5l"
    },
    "id": "cl3onv67o016501s69wxuedm3",
    "user_id": {
      "id": "cl3omhz38005401s6oa5rq7me"
    }
  }
]
to nie działało ale może dlatego że nie wiem jak to napisać (próbowałem usunąc customowe id ale nadal nie działało)
## patch api/users/{id}/housing_applicants
tak samo jak wyżej
## delete api/users/{id}/housing_applicants
tak samo

## get api/users/{id}/housing_offerings
działa dla podanego id
## post api/users/{id}/housing_offerings
będziemy tego używać wgl?? bo mi nie działało ale mogłem złego jsona zrobić
## patch api/users/{id}/housing_offerings
nie wiem jak używać / nie działa
## delete api/users/{id}/housing_offerings
nie wiem jak używać / nie działa



# housingOfferings
## post api/housingOfferings
działa
## get api/housingOfferings 
działa, 
przetestowałem dodatkowo z wherem "gt":1 dla size i wyszukało poprawnie 
## get api/housingOfferings/{id}
działa
## patch api/housingOfferings/{id}
działa
## delete api/housingOfferings/{id}
działa
## get api/housingOfferings/{id}housingApplicants
działa
## post api/housingOfferings/{id}housingApplicants
nie wiem jak używać / nie działa
## patch api/housingOfferings/{id}housingApplicants
nie wiem jak używać / nie działa
## delete api/housingOfferings/{id}housingApplicants
nie wiem jak używać / nie działa
# housingApplicants
## post /api/hosuingApplicants 
działa
## get /api/hosuingApplicants 
działa 
## get /api/hosuingApplicants/{id}
działa, dla wybranego where też
## post /api/hosuingApplicants/{id}
działa
## patch /api/hosuingApplicants/{id}
chyba nie będziemy używać? 
## delete /api/hosuingApplicants/{id}
działa
