build:
	docker build -t wings .

start:
	docker run -it -v ${pwd}/packages/components/src:/workspace/packages/components/src -v ${pwd}/packages/react/src:/workspace/packages/react/src -v ${pwd}/packages/jsonschema-form/src:/workspace/packages/jsonschema-form/src -p 8001:8001  wings:latest sh
