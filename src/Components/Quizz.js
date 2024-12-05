import React, { useState } from "react";

import { Box, Button, Typography, Card, CardContent } from "@mui/material";

const Quizz= () => {
    const questions =[
        {
            question:"Quel est le taux de pourcentage de la constitution d'eau dans notre corps humain ?",
            options:["80%",
                    "50%",
                    "40%",
                    "60%"],
            answer: "60%"
        },
        {
            question:"Combien représente le plancton dans la biodiversité marine ?",
            options:["70%",
                    "50%",
                    "95%",
                    "30%"],
            answer: "95%"
        },
        {
            question:"l'augmentation du niveau de la mer est-il dangereux ?",
            options:["Vrai",
                    "Faux",
                    ],
            answer: "Vrai"
        },
        {
            question:"Combien absorde l'océan du à l'excés de chaleur généré par les activités humaines ?",
            options:["75%",
                    "93%",
                    "66%",
                    "54%"],
            answer: "93%"
        },
        {
            question:"L'impact du réchauffement climatique peut provoquer une perte sur la biodiversité marine ?",
            options:["Vrai",
                    "Faux",
                   ],
            answer: "Vrai"
        },
    ];
    const [currentQuestion,setCurrentQuestion] = useState(0);
    const [score,setScore]= useState(0);
    const [showScore,setShowScore] = useState(false);


    const handleAnswerClick = (option) => {
        if(option === questions[currentQuestion].answer)
        {
            setScore(score+1);
        }
        else{
            setScore(score);
        }
    }

    const nextQuestion = currentQuestion + 1;
    if(nextQuestion < questions.length)
    {
        setCurrentQuestion(nextQuestion);
    }else{
        setShowScore(true);
    }
   

    return (
        <Box style={{
            display:"flex",
            flexDirection:"column",
            justifyContent: "center",
            alignItems:"center",
            padding:"2px",
            height:"100%"
        }}
        >
            {showScore ? (
                 <Card style={{
                    display:"flex",
                    textAlign:"center",
                    maxWidth:"400",
                 }}>
                    <CardContent>
                        <Typography variant="h4" gutterBottom>
                            Quizz terminé !!
                        </Typography>
                        <Typography variant="h6">
                        Votre score est de {score} sur {questions.length} !
                        </Typography>
                    </CardContent>
            </Card>
            ):
            (
              <card style={{ maxWidth:"400",display:"flex"}}>
                <CardContent>
                <Typography variant="h5" gutterBottom>

                        Question {currentQuestion + 1}/{questions.length}

                        </Typography>

                        <Typography variant="body1" sx={{ marginBottom: 2 }}>

                        {questions[currentQuestion].question}

                        </Typography>
                        
                        {questions[currentQuestion].options.map((option, index) => (

                                    <Button

                                    key={index}

                                    variant="contained"

                                    color="primary"

                                    sx={{ margin: "8px 0", width: "100%" }}

                                    onClick={() => handleAnswerClick(option)}

                                    >

                                    {option}

                                    </Button>

                                    ))}
                </CardContent>
              </card>    
            )

            }
           

        </Box>
    )


}
export default Quizz;