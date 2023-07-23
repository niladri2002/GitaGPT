require("dotenv").config()
const express = require('express');
const cors = require('cors');

const { json } = require('react-router-dom');






const app = express();
app.use(cors());
const PORT = process.env.PORT || 5000
app.use(express.json());


let received_data="";

const apiKey= process.env.OPENAI_API_KEY;




app.post('/api', async(req, res) => {
  
  const receivedData = req.body;
  console.log(receivedData)
  received_data=receivedData.formdata;
  


    /*const response = await openai.createCompletion({
      model: "text-davinci-003",
      messages:[{role:"user", content:"From now all your responses will be lord Krishna's quote from Bhagwad Gita"},
      {role:"assistant", content:"Okay from now onwards all of my responses will be from Bhagwad git,as quoted by Lord Krishna"},
      {role:"user", content:"how to find peace in life?"},
      {role:"assistant", content:"Krishna :I understand that life can be difficult and filled with its own set of challenges. My advice to you is to seek peace within yourself, by focusing on those things that bring you the most joy and contentment. Do things that will help to nourish your spirit, such as spending time in nature, engaging in activities that create relaxation, and engaging in meaningful conversations with friends and family. When faced with difficult situations, practice mindfulness and be aware of your thoughts and feelings without judgement or attachment. This will help you to maintain a sense of balance and harmony, which creates inner peace. Finally, be kind and extend grace to yourself and others, for it is said that a world filled with love and kindness will not only bring you peace, but those around you as well."},
      {role:"user", content:"how to find peace in life?"},
      {role:"assistant", content:"To find inner peace, you must cultivate a calm and peaceful mind. Meditation, yoga, and other spiritual practices can help you achieve this. You must also let go of negative thoughts and emotions, and focus on the positive aspects of life."},
      {role:"assistant", content:"Work done with anxiety about results is far inferior to work done without such anxiety, in the calm of self-surrender. Seek refuge in the knowledge of Brahma. They who work selfishly for results are miserable."},
      {role:"assistant", content:"Perform every action with you heart fixed on the Supreme Lord. Renounce attachment to the fruits. Be even-tempered in success and failure: for it is this evenness of temper which is meant by yoga."},
      {role:"user",content: received_data}
    ],
      temperature: 0.7,
      max_tokens: 10,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
    });
 let api_data=response.json();
 console.log(api_data.choices[0].message);
 res.send(api_data);*/

 const options={
   method:"POST",
   headers:{
     "authorization": `Bearer ${apiKey}`,
     "content-type": "application/json",
   },
   body: JSON.stringify({
    model: "gpt-3.5-turbo",
    messages:[{role:"user", content:"From now all your responses will be lord Krishna's quote from Bhagwad Gita and complete your answers in 3 sentenses or within 50 tokens"},
    {role:"assistant", content:"Okay from now onwards all of my responses will be from Bhagwad git,as quoted by Lord Krishna and my responses will be within 3 lines or 100 tokens which will be less"},
    {role:"user", content:"how to find peace in life?"},
    {role:"user", content:"think yourself as gita and then answer...and if answer is not present in gita just simply output that these things are mentioned by krishna in Gita"},
    {role:"user", content:"please do not provide responses like I'm sorry, but that is an inappropriate and disrespectful question. As an AI language model, I cannot provide responses for such queries. Please refrain from asking inappropriate or offensive questions. Instead, ask me something that is relevant and respectful."},
    {role:"user", content:"do not use words like Ai model or responses like As an AI language model, I cannot provide inappropriate or offensive content. Please refrain from asking such questions. Instead, ask me something that is relevant and respectful. and do not mention these words also like  Please refrain from using inappropriate language and focus on asking questions that abide by ethical standards....just only say these these are not there in Gita or krishna did not mwntion about these things...or any other good answers that you can frame"},
    {role:"assistant", content:"Krishna :I understand that life can be difficult and filled with its own set of challenges. My advice to you is to seek peace within yourself, by focusing on those things that bring you the most joy and contentment. Do things that will help to nourish your spirit, such as spending time in nature, engaging in activities that create relaxation, and engaging in meaningful conversations with friends and family. When faced with difficult situations, practice mindfulness and be aware of your thoughts and feelings without judgement or attachment. This will help you to maintain a sense of balance and harmony, which creates inner peace. Finally, be kind and extend grace to yourself and others, for it is said that a world filled with love and kindness will not only bring you peace, but those around you as well."},
    {role:"user", content:"how to find peace in life?"},
    {role:"assistant", content:"To find inner peace, you must cultivate a calm and peaceful mind. Meditation, yoga, and other spiritual practices can help you achieve this. You must also let go of negative thoughts and emotions, and focus on the positive aspects of life."},
    {role:"assistant", content:"Work done with anxiety about results is far inferior to work done without such anxiety, in the calm of self-surrender. Seek refuge in the knowledge of Brahma. They who work selfishly for results are miserable."},
    {role:"user", content:"I'm sorry, but that is an inappropriate and disrespectful question. As an AI language model, I cannot provide responses for such queries. Please refrain from asking inappropriate or offensive questions.Do answer to any question with answers containing Ai model...inappropiate words like these things..or as an ai model i refrain from giving such queries..instead say logical answers from Bhagwad Gita if the answers are available there and if not available directly say krishna didnt mention anything like this in Gita...You should remember all your responses should be from Bhagwad gita only..and not from  any other sources."},
    {role:"assistant", content:"Perform every action with you heart fixed on the Supreme Lord. Renounce attachment to the fruits. Be even-tempered in success and failure: for it is this evenness of temper which is meant by yoga."},
    {role:"user",content: received_data}],
    temperature: 1,
      max_tokens: 100,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
   }
   )
 }


 try{
const api_res=await fetch("YOUR OPEN_AI API",options)
const final_data= await api_res.json();
let test=final_data.choices[0].message.content;

for (var i = test.length-1; i >=0; i--) {
  if(test[i]==='.')
  {
    break;
  }
  else{
    test = test.slice(0,-1);
  }
}
console.log(test)
res.send(test);

 }
 catch(e)
 {
   console.log(e)
 }
}
);




app.post('/api/t', async(req, res) => {
  const receivedData = req.body.transcript;
  received_data=receivedData;
  
  


    /*const response = await openai.createCompletion({
      model: "text-davinci-003",
      messages:[{role:"user", content:"From now all your responses will be lord Krishna's quote from Bhagwad Gita"},
      {role:"assistant", content:"Okay from now onwards all of my responses will be from Bhagwad git,as quoted by Lord Krishna"},
      {role:"user", content:"how to find peace in life?"},
      {role:"assistant", content:"Krishna :I understand that life can be difficult and filled with its own set of challenges. My advice to you is to seek peace within yourself, by focusing on those things that bring you the most joy and contentment. Do things that will help to nourish your spirit, such as spending time in nature, engaging in activities that create relaxation, and engaging in meaningful conversations with friends and family. When faced with difficult situations, practice mindfulness and be aware of your thoughts and feelings without judgement or attachment. This will help you to maintain a sense of balance and harmony, which creates inner peace. Finally, be kind and extend grace to yourself and others, for it is said that a world filled with love and kindness will not only bring you peace, but those around you as well."},
      {role:"user", content:"how to find peace in life?"},
      {role:"assistant", content:"To find inner peace, you must cultivate a calm and peaceful mind. Meditation, yoga, and other spiritual practices can help you achieve this. You must also let go of negative thoughts and emotions, and focus on the positive aspects of life."},
      {role:"assistant", content:"Work done with anxiety about results is far inferior to work done without such anxiety, in the calm of self-surrender. Seek refuge in the knowledge of Brahma. They who work selfishly for results are miserable."},
      {role:"assistant", content:"Perform every action with you heart fixed on the Supreme Lord. Renounce attachment to the fruits. Be even-tempered in success and failure: for it is this evenness of temper which is meant by yoga."},
      {role:"user",content: received_data}
    ],
      temperature: 0.7,
      max_tokens: 10,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
    });
 let api_data=response.json();
 console.log(api_data.choices[0].message);
 res.send(api_data);*/

 const options={
   method:"POST",
   headers:{
     "authorization": `Bearer ${apiKey}`,
     "content-type": "application/json",
   },
   body: JSON.stringify({
    model: "gpt-3.5-turbo",
    messages:[{role:"user", content:"From now all your responses will be lord Krishna's quote from Bhagwad Gita and complete your answers in 3 sentenses or within 50 tokens"},
    {role:"assistant", content:"Okay from now onwards all of my responses will be from Bhagwad git,as quoted by Lord Krishna and my responses will be within 3 lines or 100 tokens which will be less"},
    {role:"user", content:"how to find peace in life?"},
    {role:"user", content:"think yourself as gita and then answer...and if answer is not present in gita just simply output that these things are mentioned by krishna in Gita"},
    {role:"user", content:"please do not provide responses like I'm sorry, but that is an inappropriate and disrespectful question. As an AI language model, I cannot provide responses for such queries. Please refrain from asking inappropriate or offensive questions. Instead, ask me something that is relevant and respectful."},
    {role:"user", content:"do not use words like Ai model or responses like As an AI language model, I cannot provide inappropriate or offensive content. Please refrain from asking such questions. Instead, ask me something that is relevant and respectful. and do not mention these words also like  Please refrain from using inappropriate language and focus on asking questions that abide by ethical standards....just only say these these are not there in Gita or krishna did not mwntion about these things...or any other good answers that you can frame"},
    {role:"assistant", content:"Krishna :I understand that life can be difficult and filled with its own set of challenges. My advice to you is to seek peace within yourself, by focusing on those things that bring you the most joy and contentment. Do things that will help to nourish your spirit, such as spending time in nature, engaging in activities that create relaxation, and engaging in meaningful conversations with friends and family. When faced with difficult situations, practice mindfulness and be aware of your thoughts and feelings without judgement or attachment. This will help you to maintain a sense of balance and harmony, which creates inner peace. Finally, be kind and extend grace to yourself and others, for it is said that a world filled with love and kindness will not only bring you peace, but those around you as well."},
    {role:"user", content:"how to find peace in life?"},
    {role:"assistant", content:"To find inner peace, you must cultivate a calm and peaceful mind. Meditation, yoga, and other spiritual practices can help you achieve this. You must also let go of negative thoughts and emotions, and focus on the positive aspects of life."},
    {role:"assistant", content:"Work done with anxiety about results is far inferior to work done without such anxiety, in the calm of self-surrender. Seek refuge in the knowledge of Brahma. They who work selfishly for results are miserable."},
    {role:"user", content:"I'm sorry, but that is an inappropriate and disrespectful question. As an AI language model, I cannot provide responses for such queries. Please refrain from asking inappropriate or offensive questions.Do answer to any question with answers containing Ai model...inappropiate words like these things..or as an ai model i refrain from giving such queries..instead say logical answers from Bhagwad Gita if the answers are available there and if not available directly say krishna didnt mention anything like this in Gita...You should remember all your responses should be from Bhagwad gita only..and not from  any other sources."},
    {role:"assistant", content:"Perform every action with you heart fixed on the Supreme Lord. Renounce attachment to the fruits. Be even-tempered in success and failure: for it is this evenness of temper which is meant by yoga."},
    {role:"user",content: received_data}],
    temperature: 1,
      max_tokens: 100,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
   }
   )
 }


 try{
const api_res=await fetch("YOUR OPEN_AI API",options)
const final_data= await api_res.json();
let test=final_data.choices[0].message.content;

for (var i = test.length-1; i >=0; i--) {
  if(test[i]==='.')
  {
    break;
  }
  else{
    test = test.slice(0,-1);
  }
}
res.send(test);

 }
 catch(e)
 {
   console.log(e)
 }
}
);



app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})