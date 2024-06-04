import unittest
import requests
import json

class PatientMedicalAppointmetsTests(unittest.TestCase):
	patient_register_request_data = None
	patient_login_request_data = None
	patient_delete_request_data = None
	medical_appointment_request_data = None
	valid_update_medical_appoinment_request_data = None
	invalid_update_medical_appoinment_request_data = None
	
	@classmethod
	def setUpClass(cls):
		cls.register_patient_url = "http://localhost:8080/registerPatient"
		cls.login_patient_url = "http://localhost:8080/loginPatient"
		cls.delete_patient_url = "http://localhost:8080/deletePatient"
		cls.create_medical_appointment_url = "http://localhost:8080/createMedicalAppointment"
		cls.delete_medical_appointment_url = "http://localhost:8080/deleteMedicalAppointment"
		cls.update_medical_appointment_url = "http://localhost:8080/updateMedicalAppointment/"
		cls.patient_register_request_data = {
			"rut": "11.111.111-1",
			"name": "Sansano",
			"lastname": "Promedio",
			"password": "sansano123",
			"allergies": ["Mani", "DFIS"],
			"birthdate": "2024-05-11", 
			"address": "USM CSJ",
			"phone_number": "+56 9 0000 0000",
			"fonasa": "A"
		}
		cls.patient_login_request_data = {
			"rut": "11.111.111-1",
			"password": "sansano123"
		}
		cls.patient_delete_request_data = {
			"rut": "11.111.111-1"
		}
		cls.medical_appointment_request_data = {
			"date": "2024-05-10", 
			"start_time": "12:00:00", 
			"end_time": "12:30:00", 
			"exam_type": "resonancia",
			"diagnosis": "cancer",
			"rut_doctor": "22.222.222-2",
			"rut_assistant": "33.333.333-3"
		}
		cls.valid_update_medical_appoinment_request_data = {
			"date": "2024-05-10", 
			"start_time": "11:00:00", 
			"end_time": "12:30:00", 
			"exam_type": "resonancia",
			"rut_doctor": "22.222.222-2",
			"rut_assistant": "33.333.333-3"
		}
		cls.invalid_update_medical_appoinment_request_data = {
			"date": "2024-05-10", 
			"start_time": "110:0:00", #INCORRECTO
			"end_time": "12:30:00", 
			"exam_type": "resonancia",
			"rut_doctor": "22.222.222-2",
			"rut_assistant": "33.333.333-3"
		}

	
	@classmethod
	def tearDownClass(cls):
		del cls.patient_register_request_data
		del cls.patient_login_request_data
		del cls.patient_delete_request_data
		del cls.medical_appointment_request_data
		del cls.valid_update_medical_appoinment_request_data
		del cls.invalid_update_medical_appoinment_request_data


	def test_update_valid_medical_appointment(self):
		response_register = requests.post(self.register_patient_url, json=self.patient_register_request_data)
		response_login = requests.post(self.login_patient_url, json=self.patient_login_request_data)
		headers = {
			"auth-token": response_login.headers.get("auth-token")
		}
		response_create = requests.post(self.create_medical_appointment_url, json=self.medical_appointment_request_data, headers=headers)
		medical_appointment_delete_request_data = {
			"id": response_create.json()["id"]
		}
		self.valid_update_medical_appoinment_request_data = {
			"id": response_create.json()["id"]
		}
		response_update = requests.put(self.update_medical_appointment_url, json=self.valid_update_medical_appoinment_request_data, headers=headers)
		response_delete_medical_appointment = requests.delete(self.delete_medical_appointment_url, json=medical_appointment_delete_request_data, headers=headers)
		response_delete_patient = requests.delete(self.delete_patient_url, json=self.patient_delete_request_data)
		self.assertEqual(200, response_update.status_code)

	def test_update_invalid_medical_appointment(self):
		response_register = requests.post(self.register_patient_url, json=self.patient_register_request_data)
		response_login = requests.post(self.login_patient_url, json=self.patient_login_request_data)
		headers = {
			"auth-token": response_login.headers.get("auth-token")
		}
		response_create = requests.post(self.create_medical_appointment_url, json=self.medical_appointment_request_data, headers=headers)
		medical_appointment_delete_request_data = {
			"id": response_create.json()["id"]
		}
		self.valid_update_medical_appoinment_request_data = {
			"id": response_create.json()["id"]
		}
		response_update = requests.put(self.update_medical_appointment_url, json=self.invalid_update_medical_appoinment_request_data, headers=headers)
		response_delete_medical_appointment = requests.delete(self.delete_medical_appointment_url, json=medical_appointment_delete_request_data, headers=headers)
		response_delete_patient = requests.delete(self.delete_patient_url, json=self.patient_delete_request_data)
		self.assertEqual(400, response_update.status_code)

if __name__ == "__main__":
	unittest.main()
