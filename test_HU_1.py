import unittest
import requests
import json

class Tests(unittest.TestCase):
	worker_register_request_data = None
	worker_login_request_data = None
	worker_delete_request_data = None
	valid_medical_appointment_type_request_data = None

	@classmethod
	def setUpClass(cls):
		cls.register_worker_url = "http://localhost:8080/registerWorker"
		cls.login_worker_url = "http://localhost:8080/loginWorker"
		cls.delete_worker_url = "http://localhost:8080/deletePatient"
		cls.visualize_medical_appointments_by_type_url = "http://localhost:8080/medicalAppointmentByExamType"
		cls.worker_register_request_data = { #DATOS PARA CREAR UN TRABAJADOR CON EL CARGO DE "JEFE DE UNIDAD"
			"rut": "21.266.187-2",
			"name": "Bastian",
			"lastname": "Ortega",
			"password": "Basti123",
			"birthdate": "2003-03-27",
			"address": "San Pablo",
			"phone_number": "+56 9 0000 0000",
			"position": "jefe_unidad"
		}
		cls.worker_login_request_data = { #DATOS PARA LOGUEAR AL TRABAJADOR CON EL CARGO DE "JEFE DE UNIDAD"
			"rut": "21.266.187-2",
			"password": "Basti123"
		}
		cls.worker_delete_request_data = { #DATOS PARA ELIMINAR DE LA BD AL TRABAJADOR CON EL CARGO DE "JEFE DE UNIDAD"
			"rut": "21.266.187-2"
		}
		cls.valid_visualize_medical_appointment_by_type_request_data = { #DATOS PARA OBTENER TODAS LAS HORAS MEDICAS DE UN TIPO DE EXAMEN ESPECIFICO
			"exam_type": "resonancia"
		}
	
	@classmethod
	def tearDownClass(cls):
		del cls.register_worker_url
		del cls.login_worker_url
		del cls.delete_worker_url
		del cls.visualize_medical_appointments_by_type_url
		del cls.worker_register_request_data
		del cls.worker_login_request_data
		del cls.worker_delete_request_data
		del cls.valid_visualize_medical_appointment_by_type_request_data

	def test_valid_visualize_medical_appointments_by_type(self): #TEST PARA VISUALIZAR DE FORMA VALIDA LAS HORAS MEDICAS
		response_register = requests.post(self.register_worker_url, json=self.worker_register_request_data)
		response_login = requests.post(self.login_worker_url, json=self.worker_login_request_data)
		headers = {
			"auth-token": response_login.headers.get("auth-token")
		}
		response_visualize = requests.get(self.visualize_medical_appointments_by_type_url, json=self.valid_visualize_medical_appointment_by_type_request_data, headers=headers)
		response_delete_worker = requests.delete(self.delete_worker_url, json=self.worker_delete_request_data)
		self.assertEqual(200, response_visualize.status_code)
	
	def test_invalid_visualize_medical_appointments_by_type(self): #TEST PARA VISUALIZAR DE FORMA INVALIDA LAS HORAS MEDICAS
		response_register = requests.post(self.register_worker_url, json=self.worker_register_request_data)
		response_login = requests.post(self.login_worker_url, json=self.worker_login_request_data)
		headers = {
			"auth-token": response_login.headers.get("auth-token")
		}
		#SE UTILIZA EL METODO "requests.post" EN VEZ DE "requests.get"
		response_visualize = requests.post(self.visualize_medical_appointments_by_type_url, json=self.valid_visualize_medical_appointment_by_type_request_data, headers=headers)
		response_delete_worker = requests.delete(self.delete_worker_url, json=self.worker_delete_request_data)
		self.assertEqual(404, response_visualize.status_code)

if __name__ == "__main__":
	unittest.main()