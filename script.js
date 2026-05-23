const client = mqtt.connect(
    "wss://broker.emqx.io:8084/mqtt"
);

client.on("connect", function ()
{
    console.log("Conectado MQTT");

    client.subscribe("molino/rpm");
    client.subscribe("molino/caudal");
});

client.on("message", function (topic, message)
{
    const value = message.toString();

    console.log(topic + " -> " + value);

    if (topic === "molino/rpm")
    {
        document.getElementById("rpm").innerText = value;
    }

    if (topic === "molino/caudal")
    {
        document.getElementById("flow").innerText = value;
    }
});

client.on("error", function (err)
{
    console.log("ERROR MQTT");
    console.log(err);
});
