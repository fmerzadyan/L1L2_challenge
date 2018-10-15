import React from "react";
import Table from "./Table";

export default class TablePage extends React.Component {
    state = {
        candidates: [
            { name: "Kerrie", skills: ["JavaScript", "Docker", "Ruby"] },
            { name: "Mario", skills: ["Python", "AWS"] },
            { name: "Jacquline", skills: ["JavaScript", "Azure"] },
            { name: "Kathy", skills: ["JavaScript", "Java"] },
            { name: "Anna", skills: ["JavaScript", "AWS"] },
            { name: "Matt", skills: ["PHP", "AWS"] },
            { name: "Matt", skills: ["PHP", ".Net", "Docker"] }
        ]
    }
    filterCandidateBySkill = (candidates, skill) => {
        let candidatesTemplate = [];
        if (skill) {
            candidates.forEach((candidate) => {
                if (candidate.skills.includes(skill)) {
                    let jsxTemplate = (
                        <tr key={candidate.name}>
                            <td>{candidate.name}</td>
                            <td>{candidate.skills.join()}</td>
                        </tr>
                    );
                    candidatesTemplate.push(jsxTemplate);
                }
            });
        } else {
            candidates.forEach((candidate) => {
                let jsxTemplate = (
                    <tr key={candidate.name}>
                        <td>{candidate.name}</td>
                        <td>{candidate.skills.join()}</td>
                    </tr>
                );
                candidatesTemplate.push(jsxTemplate);
            });
        }
        return candidatesTemplate;
    };
    render() {
        const nameHeader = "Name";
        const skillsHeader = "Skills";
        return (
            <div className="container">
                <Table tableTitle="(Demo) Unfiltered Candidates:" nameHeader={nameHeader} skillsHeader={skillsHeader} filterCandidateBySkill={this.filterCandidateBySkill} candidates={this.state.candidates} filter={undefined}/>
                <Table tableTitle="JS Candidates:" nameHeader={nameHeader} skillsHeader={skillsHeader} filterCandidateBySkill={this.filterCandidateBySkill} candidates={this.state.candidates} filter="JavaScript"/>
                <Table tableTitle="AWS Candidates:" nameHeader={nameHeader} skillsHeader={skillsHeader} filterCandidateBySkill={this.filterCandidateBySkill} candidates={this.state.candidates} filter="AWS"/>
                <Table tableTitle="Docker Candidates:" nameHeader={nameHeader} skillsHeader={skillsHeader} filterCandidateBySkill={this.filterCandidateBySkill} candidates={this.state.candidates} filter="Docker"/>
            </div>  
        );
    }
}
