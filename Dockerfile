FROM alpine:latest

WORKDIR /app

RUN apk add --no-cache unzip ca-certificates

ADD https://github.com/pocketbase/pocketbase/releases/download/v0.20.0/pocketbase_0.20.0_linux_amd64.zip /tmp/pb.zip

RUN unzip /tmp/pb.zip -d /app && rm /tmp/pb.zip

EXPOSE 8090

CMD ["./pocketbase", "serve", "--http=0.0.0.0:8090", "--dir=/app"]
