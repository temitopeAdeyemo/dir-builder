import { FileSystemGenerator, JsonGenerator, YAMLProcessor } from './dist';

const json = JsonGenerator.jsonFromYAML('./dir.yaml', true);

console.log('.........', json);

YAMLProcessor.processYAMLFile('./dir.yaml', 'output');
FileSystemGenerator.createFromJSON('/', '{}');
JsonGenerator.jsonFromYAML('/', true);

const yamlString = `
apiVersion: apps/v1
kind: Deployment
metadata:
  name: cba-customer-server-deployment
spec:
  replicas: 3
  selector:
    matchLabels:
      component: cba-customer-server
  template:
    metadata:
      labels:
        component: cba-customer-server
    spec:
      containers:
        - name: cba-customer-server
          image: neptunecbaregistry.azurecr.io/customer-api:v2.6.4
          imagePullPolicy: Always
          ports:
            - containerPort: 50051
          env:
            - name: PORT
              valueFrom:
                configMapKeyRef:
                  name: customer-config-map
                  key: PORT
            - name: NODE_ENV
              valueFrom:
                configMapKeyRef:
                  name: customer-config-map
                  key: NODE_ENV
            - name: APP_URL
              valueFrom:
                configMapKeyRef:
                  name: customer-config-map
                  key: APP_URL
`;
