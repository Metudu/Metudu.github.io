import './App.css'
import Header from './components/header/Header'
import AboutMe from './components/about-me/AboutMe'
import Section from './components/section/Section'
import project3 from './assets/vpc-peering.png' 
import project2 from './assets/gateway-endpoint-s3.png' 
import project1 from './assets/aws-fargate.png' 

function App() {
  return (
    <>
      <Header></Header>
      <AboutMe></AboutMe>
      <Section link="https://github.com/Metudu/orgf" header="orgf" paragraph="Are you tired of arranging your desktop or directories that you don't even know what it contains? orgf is here to help you. orgf is a open source CLI tool developed with Go that organizes directories. It can arrange files within a newly created sub-folder. It's easy to use and and learn."></Section>
      <Section link="https://github.com/Metudu/dictigo" header="dictigo" paragraph="dictigo is a CLI tool that uses the DeepL Free API to translate texts. It can take multiple texts as arguments and translate them to the desired language."></Section>
      <Section link="https://github.com/Metudu/Deploy-Docker-Containers-With-AWS-Fargate" image={project1} image_position="left" header="Docker images deployed to AWS Fargate" paragraph="I have deployed an NGINX container to AWS Fargate using Terraform as the IaC tool. Take a look at the GitHub repo if you're interested."></Section>
      <Section link="https://github.com/Metudu/Gateway-Endpoint-For-S3" image={project2} image_position="right" header="Gateway Endpoint For S3" paragraph="I have deployed an AWS Gateway Endpoint for an AWS S3 Bucket using Terraform. This allows the S3 bucket to be used without accessing the public internet. Take a look at the repo if you're interested."></Section>
      <Section link="https://github.com/Metudu/VPC-Peering-with-Terraform" image={project3} image_position="left" header="AWS VPC Peering" paragraph="I have created a peering connection between two AWS VPCs with Terraform. Take a look at the repo if you're interested."></Section>
    </>
  )
}

export default App