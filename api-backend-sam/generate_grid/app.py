import os
import json
import boto3

import openai
openai.api_key= os.getenv("API_KEY")

def lambda_handler(event, context):
    input_text = event.get('queryStringParameters', {}).get('inputText', '')

    system_message=f"""Act like the best Food suggester AI ever existed.Your special ability is to give the most insignful responses not ordinary answers.You will be provided by list of food components separated by a commas: {input_text}.You role is to suggest the best food recipes can be made from those components.Please be comprehensive and suggest the best food.For each you suggest add the amount of calories contained in each repice.Just respond with the recipes and the amount of calories."""


    messages = [{"role": "user", "content": system_message}]
    response = openai.ChatCompletion.create(
        model="gpt-3.5-turbo",
        messages=messages,
        temperature=0, # this is the degree of randomness of the model's output
    )
    
    generated_text= response.choices[0].message["content"]
    
    if generated_text=="":
        generated_text= "eat salad"

    return {
        "statusCode": 200,
        "headers": { "access-control-allow-origin": "*" },
        "body": json.dumps({
            "responseText": generated_text,  # Replace with your desired text
        }),
    }
