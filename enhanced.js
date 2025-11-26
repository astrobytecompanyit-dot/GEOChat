const translatte = require('translatte');
const express=require("express");
const app=express();

app.use(express.urlencoded({extended:true}));
app.use(express.json())
const professionalSentences = [
  "Committed to continuous learning and applying best practices to achieve organizational goals.",
  "Skilled at collaborating with cross-functional teams to deliver high-quality results on time.",
  "Focused on leveraging innovative solutions to drive growth and efficiency.",
  "Dedicated to developing scalable and maintainable solutions to solving a problem.",
  "Experienced in adapting to evolving technologies and implementing cutting-edge strategies.",
  "Passionate about enhancing productivity through effective problem-solving and process improvement.",
  "Driven to exceed performance targets while maintaining high standards of quality.",
  "Proactive in identifying opportunities for optimization and implementing strategic initiatives.",
  "Adept at translating complex requirements into actionable project plans and outcomes.",
  "Committed to fostering a positive work environment and mentoring colleagues for professional growth.",
  
  "Strong commitment to delivering excellence in every task undertaken.",
  "Always eager to embrace new challenges and deliver impactful results.",
  "Known for maintaining professionalism and attention to detail in fast-paced environments.",
  "Motivated to contribute meaningfully to organizational success through innovative thinking.",
  "Able to manage multiple responsibilities efficiently while maintaining top performance.",
  "Recognized for reliability, dedication, and a strong sense of responsibility.",
  "Strives to bring creativity and analytical thinking together to solve complex problems.",
  "Demonstrates effective communication and interpersonal skills across diverse teams.",
  "Focused on achieving continuous improvement and long-term career growth.",
  "Seeks to make a positive impact through dedication, innovation, and collaboration."
];






const workExperience = [
  "Assisted in the successful completion of multiple team-based projects within tight deadlines.",
  "Collaborated with cross-functional teams to achieve project goals and deliver efficient results.",
  "Contributed to the design, planning, and implementation of innovative solutions.",
  "Supported the development and testing of various processes to improve efficiency.",
  "Participated in brainstorming sessions and provided creative ideas to solve challenges.",
  "Demonstrated strong problem-solving skills by addressing real-world issues with practical approaches.",
  "Worked closely with mentors and team leaders to gain hands-on industry experience.",
  "Contributed to maintaining project documentation, reports, and workflow records.",
  "Assisted in identifying improvement areas and implementing quality-focused changes.",
  "Engaged in learning new tools, technologies, and methodologies relevant to the project.",
  "Coordinated with team members to ensure smooth communication and task execution.",
  "Helped in preparing presentations and reports for internal and client meetings.",
  "Involved in data collection, analysis, and visualization to support decision-making.",
  "Supported automation and optimization of routine processes for better productivity.",
  "Took part in research and documentation to support technical and strategic initiatives.",
  "Collaborated in prototype design, testing, and evaluation activities.",
  "Participated in review sessions to understand industry best practices and quality standards.",
  "Contributed to a culture of teamwork, mentoring, and continuous learning.",
  "Supported onboarding activities and knowledge sharing among peers.",
  "Developed a foundational understanding of professional ethics, communication, and teamwork.",
];






app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/index.html");
})

app.post("/token",async(req,res)=>{

    const token=req.body.token;
    let input=req.body.input;
    console.log(token,input)
    if(token!="six25"){
        return res.json({error:false});
    }

    async function roundTripTranslation(text) {
  try {
    const index = Math.floor(Math.random() * professionalSentences.length);
    text+=" "+professionalSentences[index];
    // Step 1: English -> Bengali
    const toBengali = await translatte(text, { to: 'bn' });

    let newBen = toBengali.text.replace(/আমি/g, "হিসেবে");
newBen = newBen.replace(/আমার/g, "যার");
     
    // Step 2: Bengali -> English
    const backToEnglish = await translatte(newBen, { to: 'en' });
    console.log("Back to English:\n", backToEnglish.text);
    return backToEnglish.text;
      
  } catch (err) {
    return false;
  }
}


const result=await roundTripTranslation(input);
console.log("result:"+result)
if(result){
    return res.json({success:true, output:result});
}
else{
    return res.json({error:false});
}

})



app.post("/work",async(req,res)=>{

    const token=req.body.token;
    let input=req.body.input;
    console.log(token,input)
    if(token!="six25"){
        return res.json({error:false});
    }

    async function roundTripTranslation(text) {
  try {
    const index = Math.floor(Math.random() * workExperience.length);
    text+=" "+workExperience[index];
    // Step 1: English -> Bengali
    const toBengali = await translatte(text, { to: 'bn' });

    let newBen = toBengali.text.replace(/আমি/g, "হিসেবে");
newBen = newBen.replace(/আমার/g, "যার");
     
    // Step 2: Bengali -> English
    const backToEnglish = await translatte(newBen, { to: 'en' });
    console.log("Back to English:\n", backToEnglish.text);
    return backToEnglish.text;
      
  } catch (err) {
    return false;
  }
}


const result=await roundTripTranslation(input);
console.log("result:"+result)
if(result){
    return res.json({success:true, output:result});
}
else{
    return res.json({error:false});
}

})

app.listen(3000,()=>{
    console.log("Server is running!");
})

