import csv
import random

names = [
    "Santiago",
    "Mateo",
    "Sebastián",
    "Benjamín",
    "Vicente",
    "Joaquín",
    "Martín",
    "Lucas",
    "Matías",
    "Agustín",
    "Sofía",
    "Isidora",
    "Florencia",
    "Emma",
    "Martina",
    "Emilia",
    "Antonella",
    "Maite",
    "Josefa",
    "Amanda"
]
lastnames = [
    "González",
    "Muñoz",
    "Rojas",
    "Díaz",
    "Pérez",
    "Soto",
    "Silva",
    "Contreras",
    "López",
    "Rodríguez",
    "Fernández",
    "Martínez",
    "Sánchez",
    "Ramírez",
    "Herrera",
    "Castro",
    "Flores",
    "Espinoza",
    "Valenzuela",
    "Torres"
]
allergies = [
    "Polen",
    "Ácaros del polvo",
    "Pelo de animales",
    "Alimentos",
    "Picaduras de insectos",
    "Moho",
    "Medicamentos",
    "Látex",
    "Níquel",
    "Perfumes y fragancias"
]
addresses = [
    "Santiago",
    "Valparaíso",
    "Viña del Mar",
    "Concepción",
    "La Serena",
    "Antofagasta",
    "Temuco",
    "Iquique",
    "Puerto Montt",
    "Punta Arenas",
    "Rancagua",
    "Talca",
    "Chillán",
    "Arica",
    "Valdivia"
]
fonasas = ["A", "B", "C", "D"]
years = ["1990", "1991", "1992", "1993", "1994", "1995", "1996", "1997", "1998", "1999", "2000"]
months = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"]
days = [
    "1", "2", "3", "4", "5",
    "6", "7", "8", "9", "10",
    "11", "12", "13", "14", "15",
    "16", "17", "18", "19", "20",
    "21", "22", "23", "24", "25",
    "26", "27", "28", "29"
]

patients = []

csv_file = "patients.csv"

fieldnames = ['rut', 'name', 'lastname', 'password', 'birthdate', 'allergies', 'fonasa', 'address', 'phone_number']

for i in range(1,251):
	rut = str(i)
	name = random.choice(names)
	lastname = random.choice(lastnames)
	password = str(i)
	birthdate = random.choice(years)+"-"+random.choice(months)+"-"+random.choice(days)
	allergie = random.choice(allergies)
	fonasa = random.choice(fonasas)
	address = random.choice(addresses)
	phone_number = "+56 9 "+str(i)
	temp_patient = {
		"rut": rut,
		"name": name,
		"lastname": lastname,
		"password": password,
		"birthdate": birthdate,
		"allergies": allergie,
		"fonasa": fonasa,
		"address": address,
		"phone_number": phone_number
	}
	patients.append(temp_patient)

with open(csv_file, mode='w', newline='') as file:
	writer = csv.DictWriter(file, fieldnames=fieldnames)

	writer.writeheader()

	for patient in patients:
		writer.writerow(patient)

print(f"Archivo CSV '{csv_file}' creado exitosamente.")