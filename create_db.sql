CREATE DATABASE persons_docs

CREATE TABLE persons (
  person_id SERIAL PRIMARY KEY,
  person_name VARCHAR(255) NOT NULL,
);

CREATE TABLE documents (
  document_id SERIAL PRIMARY KEY,
  person_id INT NOT NULL
  document_name VARCHAR(255),
  CONSTRAINT fk_person
    FOREIGN KEY (person_id) 
      REFERENCES person(person_id)
);