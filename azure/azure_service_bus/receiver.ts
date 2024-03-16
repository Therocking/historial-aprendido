import { delay, ServiceBusClient, ServiceBusMessage } from "@azure/service-bus";
import { DefaultAzureCredential } from "@azure/identity";

interface IMessage {
  body: string
}

// Replace `<SERVICE-BUS-NAMESPACE>` with your namespace
const fullyQualitySpaceName = "<SERVICE-BUS-NAMESPACE>.services.windows.net"

// Passwordless credential
const credential = new DefaultAzureCredential()

// name of the queue
const queueName = "<NAME OF THE QUEUE>"

async function main() {
  // create a Service Bus client using the passwordless authentication to the Service Bus namespace
  const sbClient = new ServiceBusClient(fullyQualitySpaceName, credential) 

  // createReceiver() can also be used to create a receiver for a subscription.
  const receiver = sbClient.createReceiver(queueName)

  // function to handle messages
  const myMessageHandle = async (messageReceive: IMessage) => {
    console.log(`Received message: ${messageReceive.body}`)
  }

  // function to handle any errors
  const myErrorHandler = async(error: unknown) => {
    console.log(error)
  }

  // subscribe and specify the message and error handlers
  receiver.subscribe({
    processMessage: myMessageHandle,
    processError: myErrorHandler
  })

  // Waiting long enough before closing the sender to send messages
  delay(2000)

  await receiver.close()
  await sbClient.close()
}

main().catch(err => {
  console.log(err)
  process.exit(1)
})
