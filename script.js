const client = mqtt.connect(
    "ws://broker.emqx.io:8083/mqtt"
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

    if (topic === "molino/rpm")
    {
        document.getElementById("rpm").innerText = value;
    }

    if (topic === "molino/caudal")
    {
        document.getElementById("flow").innerText = value;
    }
});
