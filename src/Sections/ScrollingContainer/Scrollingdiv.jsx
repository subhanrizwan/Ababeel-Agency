"use client"
import { Box, Container, Typography, Card, IconButton, Chip } from "@mui/material"
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material"
import { styled, keyframes } from "@mui/material/styles"
import { useState, useRef } from "react"
import Murali from '../../../assets/images/Employees/murali.webp';
import Harsha from '../../../assets/images/Employees/harsha.webp';
import Ami from '../../../assets/images/Employees/ami.webp';
import Andre from '../../../assets/images/Employees/andre.webp';
import Gluseppe from '../../../assets/images/Employees/gluseppe.webp';
import Rehman from '../../../assets/images/Employees/rehman.webp';
import Richard from '../../../assets/images/Employees/richard.webp';

// Scrolling animation for logos
const scroll = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
`

const ScrollingContainer = styled(Box)({
  width: "100%",
  overflow: "hidden",
  backgroundColor: "#f8fafc",
  padding: "30px 0",
  marginBottom: "60px",
})

const ScrollingContent = styled(Box)({
  display: "flex",
  animation: `${scroll} 10s linear infinite`,
  whiteSpace: "nowrap",
  "&:hover": {
    animationPlayState: "paused",
  },
})

const CompanyLogo = styled(Typography)({
  fontSize: "1.8rem",
  fontWeight: 700,
  color: "rgb(83, 56, 158)",
  margin: "0 80px",
  whiteSpace: "nowrap",
  userSelect: "none",
  letterSpacing: "0.5px",
})

const SectionTitle = styled(Typography)({
  fontSize: "2.5rem",
  fontWeight: 700,
  color: "#1e293b",
  marginBottom: "16px",
  "& .highlight": {
    color: "#6366f1",
  },
  "@media (max-width: 768px)": {
    fontSize: "2rem",
  },
})

const SectionLabel = styled(Typography)({
  fontSize: "1rem",
  color: "rgb(83, 56, 158)",
  fontWeight: 600,
  marginBottom: "8px",
  position: "relative",
  "&::after": {
    content: '""',
    position: "absolute",
    left: "140px",
    top: "50%",
    transform: "translateY(-50%)",
    width: "200px",
    height: "1px",
    backgroundColor: "#e2e8f0",
  },
})

const SliderContainer = styled(Box)({
  position: "relative",
  overflow: "visible",
})

const SliderWrapper = styled(Box)({
  display: "flex",
  transition: "transform 0.5s ease-in-out",
  gap: "24px",
})

const MentorCard = styled(Card)(({ theme }) => ({
  position: "relative",
  borderRadius: "16px",
  overflow: "hidden",
  cursor: "pointer",
  transition: "all 0.5s ease-in-out",
  height: "250px",
  width: "240px",
  flexShrink: 0,
  zIndex: 1,
  "&:hover": {
    width: "480px",
    transform: "translateY(-8px)",
    boxShadow: "0 20px 40px rgba(0, 0, 0, 0.15)",
    zIndex: 10,
  },
  "&:hover .mentor-info": {
    opacity: 1,
    transform: "translateX(0)",
  },
  "&:hover .mentor-image": {
    transform: "scale(1.05)",
  },
}))

const MentorImageContainer = styled(Box)({
  position: "relative",
  width: "200px",
  height: "100%",
  overflow: "hidden",
  flexShrink: 0,
})

const MentorImage = styled(Box)({
  width: "100%",
  height: "100%",
  backgroundSize: "cover",
  backgroundPosition: "center",
  transition: "transform 0.3s ease-in-out",
})

const MentorInfo = styled(Box)({
  position: "absolute",
  top: 0,
  right: 0,
  width: "200px",
  height: "100%",
  background: "linear-gradient(135deg, rgba(99, 102, 241, 0.95) 0%, rgba(139, 92, 246, 0.95) 100%)",
  color: "white",
  padding: "32px 24px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  opacity: 0,
  transform: "translateX(100%)",
  transition: "all 0.5s ease-in-out",
})

const MentorName = styled(Typography)({
  position: "absolute",
  bottom: "20px",
  left: "20px",
  color: "white",
  fontSize: "1.25rem",
  fontWeight: 600,
  textShadow: "0 2px 4px rgba(0, 0, 0, 0.3)",
  zIndex: 2,
  width: "240px",
})

const SliderButton = styled(IconButton)({
  position: "absolute",
  top: "50%",
  transform: "translateY(-50%)",
  backgroundColor: "white",
  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
  zIndex: 10,
  "&:hover": {
    backgroundColor: "#f8fafc",
    transform: "translateY(-50%) scale(1.1)",
  },
})

const ExpertMentorsSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const sliderRef = useRef(null)

  const companies = [
    "AECOM",
    "UNS",
    "RSP",
    "POPULOUS",
    "Henning Larsen",
    "BURO HAPPOLD",
    "EXTERNAL REFERENCE",
    "BENOY",
    "H1",
    "A+DA",
    "KPF",
    "COOPER CARRY",
  ]

  const mentors = [
    {
      id: 1,
      name: "Murali Manoj",
      image: Murali,
      role: "Senior Architect at Populous",
      company: "Populous",
      description:
        "Experienced architect specializing in sports and entertainment venues with over 15 years in the industry.",
    },
    {
      id: 2,
      name: "Afshan Rehman",
      image: Harsha,
      role: "Design Director at Henning Larsen",
      company: "Henning Larsen",
      description: "Award-winning architect focusing on sustainable design and urban planning solutions.",
    },
    {
      id: 3,
      name: "Richard Stewart",
      image: Ami,
      role: "Principal Engineer at Buro Happold",
      company: "Buro Happold",
      description:
        "Structural engineer with expertise in complex building systems and innovative construction methods.",
    },
    {
      id: 4,
      name: "Giuseppe Dotto",
      image:Andre,
      role: "Senior Designer at External Reference",
      company: "External Reference",
      description: "Computational design specialist with focus on parametric architecture and digital fabrication.",
    },
    {
      id: 5,
      name: "Ami Nigam",
      image:Gluseppe,
      role: "Head of Technology at Benoy",
      company: "Benoy",
      description: "Architect & Design Technology Strategist currently working as the Head of Technology at Benoy.",
    },
    {
      id: 6,
      name: "Arsha Vinjam",
      image:Rehman,
      role: "BIM Manager at KPF",
      company: "KPF",
      description: "BIM specialist with extensive experience in large-scale commercial and residential projects.",
    },
    {
      id: 7,
      name: "Michael Torres",
      image: Richard,
      role: "Design Principal at AECOM",
      company: "AECOM",
      description: "Urban design expert with focus on mixed-use developments and smart city solutions.",
    },
   
  ]

  const cardsPerView = 4
  const maxSlide = Math.max(0, mentors.length - cardsPerView)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev >= maxSlide ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev <= 0 ? maxSlide : prev - 1))
  }

  return (
    <Box sx={{ py: 8, backgroundColor: "#ffffff" }}>
      <Container maxWidth="lg">
        {/* Header Section */}
        <Box sx={{ mb: 6 }}>
          <SectionLabel>Expert Mentors</SectionLabel>
          <SectionTitle variant="h2">
            Learn from the <span className="highlight !text-primary">Industry's Best</span>
          </SectionTitle>
          <Typography
            variant="body1"
            sx={{
              color: "#64748b",
              fontSize: "1.125rem",
              maxWidth: "600px",
              lineHeight: 1.6,
            }}
          >
            Our mentors are industry experts with experience at top-tier AEC firms and on major projects worldwide.
          </Typography>
        </Box>

        {/* Scrolling Company Logos */}
        <ScrollingContainer>
          <ScrollingContent>
            {/* First set of logos */}
            {companies.map((company, index) => (
              <CompanyLogo key={index}>{company}</CompanyLogo>
            ))}
            {/* Duplicate set for seamless loop */}
            {companies.map((company, index) => (
              <CompanyLogo key={`duplicate-${index}`}>{company}</CompanyLogo>
            ))}
          </ScrollingContent>
        </ScrollingContainer>

        {/* Mentor Cards Slider */}
        <SliderContainer>
          <SliderButton onClick={prevSlide} sx={{ left: "-20px" }} disabled={currentSlide === 0}>
            <ArrowBackIos />
          </SliderButton>

          <SliderButton onClick={nextSlide} sx={{ right: "-20px" }} disabled={currentSlide >= maxSlide}>
            <ArrowForwardIos />
          </SliderButton>

          <Box sx={{ overflow: "visible" }}>
            <SliderWrapper
              ref={sliderRef}
              sx={{
                transform: `translateX(-${currentSlide * (280 + 24)}px)`,
              }}
            >
              {mentors.map((mentor) => (
                <MentorCard key={mentor.id}>
                  <MentorImageContainer>
                    <MentorImage
                      className="mentor-image"
                      sx={{
                        backgroundImage: `url(${mentor.image})`,
                      }}
                    />
                    <MentorName className="text-gray-600" >{mentor.name}</MentorName>
                  </MentorImageContainer>

                  <MentorInfo className="mentor-info">
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 700,
                        mb: 2,
                        fontSize: "1.25rem",
                        lineHeight: 1.2,
                      }}
                    >
                      {mentor.name}
                    </Typography>

                    <Typography
                      variant="subtitle1"
                      sx={{
                        fontWeight: 600,
                        mb: 2,
                        opacity: 0.9,
                        fontSize: "0.95rem",
                        lineHeight: 1.3,
                      }}
                    >
                      {mentor.role}
                    </Typography>

                    <Chip
                      label={mentor.company}
                      sx={{
                        backgroundColor: "rgba(255, 255, 255, 0.2)",
                        color: "white",
                        mb: 2,
                        fontWeight: 600,
                        fontSize: "0.75rem",
                      }}
                    />

                    <Typography
                      variant="body2"
                      sx={{
                        lineHeight: 1.4,
                        opacity: 0.9,
                        fontSize: "0.85rem",
                      }}
                    >
                      {mentor.description}
                    </Typography>
                  </MentorInfo>
                </MentorCard>
              ))}
            </SliderWrapper>
          </Box>
        </SliderContainer>
      </Container>
    </Box>
  )
}

export default ExpertMentorsSection
