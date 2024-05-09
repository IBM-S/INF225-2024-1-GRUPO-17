import unittest
import requests
import json

class PatientMedicalAppointmetsTests(unittest.TestCase):
	patient_register_request_data = None
	patient_login_request_data = None
	patient_delete_request_data = None
	valid_medical_appointment_request_data = None
	invalid_medical_appointment_request_data = None

	@classmethod
	def setUpClass(cls):
		cls.register_patient_url = "http://localhost:8080/registerPatient"
		cls.login_patient_url = "http://localhost:8080/loginPatient"
		cls.delete_patient_url = "http://localhost:8080/deletePatient"
		cls.create_medical_appointment_url = "http://localhost:8080/createMedicalAppointment"
		cls.delete_medical_appointment_url = "http://localhost:8080/deleteMedicalAppointment"
		cls.patient_register_request_data = {
			"rut": "12.345.678-9",
			"name": "Carlisho",
			"lastname": "Electrico",
			"password": "1234",
			"allergies": ["Toblerone", "Lactosa"],
			"birthdate": "2002-10-03", 
			"address": "Macul",
			"phone_number": "+56 9 1234 5678",
			"fonasa": "B"
		}
		cls.patient_login_request_data = {
			"rut": "12.345.678-9",
			"password": "1234"
		}
		cls.patient_delete_request_data = {
			"rut": "12.345.678-9"
		}
		cls.valid_medical_appointment_request_data = {
			"date": "2024-05-10", 
			"start_time": "12:00:00", 
			"end_time": "12:30:00", 
			"exam_type": "resonancia",
			"diagnosis": "fractura pie",
			"rut_doctor": "22.222.222-2",
			"rut_assistant": "33.333.333-3"
		}

	
	@classmethod
	def tearDownClass(cls):
		del cls.patient_register_request_data
		del cls.patient_login_request_data
		del cls.patient_delete_request_data
		del cls.valid_medical_appointment_request_data
		del cls.invalid_medical_appointment_request_data

	def test_create_valid_medical_appointment(self):
		response_register = requests.post(self.register_patient_url, json=self.patient_register_request_data)
		response_login = requests.post(self.login_patient_url, json=self.patient_login_request_data)
		headers = {
			"auth-token": response_login.headers.get("auth-token")
		}
		response_create = requests.post(self.create_medical_appointment_url, json=self.valid_medical_appointment_request_data, headers=headers)
		medical_appointment_delete_request_data = {
			"id": response_create.json()["id"]
		}
		response_delete_medical_appointment = requests.delete(self.delete_medical_appointment_url, json=medical_appointment_delete_request_data, headers=headers)
		response_delete_patient = requests.delete(self.delete_patient_url, json=self.patient_delete_request_data)
		self.assertEqual(200, response_delete_medical_appointment.status_code)

	def test_create_invalid_medical_appointment(self):
		response_register = requests.post(self.register_patient_url, json=self.patient_register_request_data)
		response_login = requests.post(self.login_patient_url, json=self.patient_login_request_data)
		headers = {
			"auth-token": response_login.headers.get("auth-token")
		}
		response_create = requests.post(self.create_medical_appointment_url, json=self.valid_medical_appointment_request_data, headers=headers)
		medical_appointment_delete_request_data = {
			"id": response_create.json()["id"]
		}
		response_delete_medical_appointment_2 = requests.delete(self.delete_medical_appointment_url, json="gvgjvhjbukbub", headers=headers)
		response_delete_medical_appointment = requests.delete(self.delete_medical_appointment_url, json=medical_appointment_delete_request_data, headers=headers)
		response_delete_patient = requests.delete(self.delete_patient_url, json=self.patient_delete_request_data)
		self.assertEqual(400, response_delete_medical_appointment_2.status_code)

if __name__ == "__main__":
	unittest.main()