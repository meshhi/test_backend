#!/bin/bash
docker run --name postgres_db -e POSTGRES_PASSWORD=postgres -p 5500:5432 -ti postgres
