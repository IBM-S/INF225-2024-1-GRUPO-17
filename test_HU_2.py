import unittest
import requests
import json

class Tests(unittest.TestCase):
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
		cls.patient_register_request_data = { #DATOS PARA CREAR UN PACIENTE
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
		cls.patient_login_request_data = { #DATOS PARA LOGUEAR AL PACIENTE
			"rut": "11.111.111-1",
			"password": "sansano123"
		}
		cls.patient_delete_request_data = { #DATOS PARA ELIMINAR DE LA BD AL PACIENTE
			"rut": "11.111.111-1"
		}
		cls.valid_medical_appointment_request_data = { #DATOS PARA CREAR UNA HORA MEDICA VALIDA ASOCIADA AL PACIENTE
			"date": "2024-05-10", 
			"start_time": "12:00:00", 
			"end_time": "12:30:00", 
			"exam_type": "resonancia",
			"diagnosis": "cancer",
			"rut_doctor": "22.222.222-2",
			"rut_assistant": "33.333.333-3"
		}
		cls.invalid_medical_appointment_request_data = { #DATOS PARA CREAR UNA HORA MEDICA INVALIDA ASOCIADA AL PACIENTE
			"date": "2024-05-10", 
			"start_time": "12:00:00", 
			"end_time": "12:30:00", 
			"exam_type": "resonansia", #DATO ERRONEO: resonansia
			"diagnosis": "cancer",
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

	def test_create_valid_medical_appointment(self): #TEST PARA CREAR UNA HORA MEDICA VALIDA
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
		self.assertEqual(200, response_create.status_code)

	def test_create_invalid_medical_appointment(self): #TEST PARA CREAR UNA HORA MEDICA INVALIDA
		response_register = requests.post(self.register_patient_url, json=self.patient_register_request_data)
		response_login = requests.post(self.login_patient_url, json=self.patient_login_request_data)
		headers = {
			"auth-token": response_login.headers.get("auth-token")
		}
		response_create = requests.post(self.create_medical_appointment_url, json=self.invalid_medical_appointment_request_data, headers=headers)
		response_delete_patient = requests.delete(self.delete_patient_url, json=self.patient_delete_request_data)
		self.assertEqual(400, response_create.status_code)

if __name__ == "__main__":
	unittest.main()