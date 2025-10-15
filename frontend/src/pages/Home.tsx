import { Box, Button, Container, Typography } from "@mui/material";
import React from "react";
import Footer from "../components/footer/Footer";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <Container maxWidth="lg" sx={{ minHeight: "calc(100vh - 64px)" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 4,
          py: 8,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            gap: 2,
            maxWidth: "800px",
          }}
        >
          <Typography variant="h1" className="hero-text" sx={{ 
            fontSize: { xs: "2.5rem", md: "4rem" },
            fontWeight: 700,
            mb: 2
          }}>
            AI Customer Support Bot
          </Typography>
          
          <Typography variant="body1" sx={{ 
            color: "white",
            maxWidth: "600px",
            mb: 4
          }}>
            Experience the next generation of AI conversation. Secure, customizable, and designed for you.
          </Typography>

          <Button
            variant="contained"
            size="large"
            className="btn-primary"
            onClick={() => navigate("/chat")}
            sx={{ minWidth: 200 }}
          >
            Start Chatting
          </Button>
        </Box>

        <Box sx={{ 
          position: "relative",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: { xs: 2, md: 6 },
          mt: 4
        }}>
          
          
        </Box>

        <Box 
          className="chat-container"
          sx={{ 
            width: "100%",
            maxWidth: "900px",
            mt: 6,
            overflow: "hidden"
          }}
        >
          

        </Box>
      </Box>
      <Footer />
    </Container>
  );
};

export default Home;
