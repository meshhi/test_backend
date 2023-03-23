CREATE DATABASE persons_docs

CREATE TABLE persons (
  person_id SERIAL PRIMARY KEY,
  person_name VARCHAR(255) NOT NULL,
  person_datebirth DATE NOT NULL,
  person_age SMALLINT NOT NULL,
  person_social_rate NUMERIC(5, 2) NOT NULL
);

CREATE TABLE documents (
  document_id SERIAL PRIMARY KEY,
  person_id INT NOT null,
  document_name VARCHAR(255) NOT null,
  CONSTRAINT fk_person
    FOREIGN KEY (person_id) 
      REFERENCES persons(person_id)
);