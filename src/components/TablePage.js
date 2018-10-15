import React from "react";
import Table from "./Table";

export default class TablePage extends React.Component {
    state = {
        candidates: [
            { name: "Kerrie A", skills: ["JavaScript", "Docker", "Ruby"] },
            { name: "Mario B", skills: ["Python", "AWS"] },
            { name: "Jacquline C", skills: ["JavaScript", "Azure"] },
            { name: "Kathy D", skills: ["JavaScript", "Java"] },
            { name: "Anna E", skills: ["JavaScript", "AWS"] },
            { name: "Matt F", skills: ["PHP", "AWS"] },
            { name: "Matt G", skills: ["PHP", ".Net", "Docker"] }
        ]
    }
    getJsxRowTemplate = (candidate) => (
        <tr key={candidate.name}>
            <td>{candidate.name}</td>
            <td>{candidate.skills.join()}</td>
        </tr>
    );
    filterCandidateBySkill = (candidates, skill) => {
        let candidatesTemplate = [];
        if (skill) {
            candidates.forEach((candidate) => {
                if (candidate.skills.includes(skill)) {
                    candidatesTemplate.push(this.getJsxRowTemplate(candidate));
                }
            });
        } else {
            candidates.forEach((candidate) => {
                candidatesTemplate.push(this.getJsxRowTemplate(candidate));
            });
        }
        return candidatesTemplate;
    };
    render() {
        const nameHeader = "Name";
        const skillsHeader = "Skills";
        return (
            <div className="container">
                <Table
                    tableTitle="(Demo) Unfiltered Candidates:"
                    nameHeader={nameHeader}
                    skillsHeader={skillsHeader}
                    filterCandidateBySkill={this.filterCandidateBySkill}
                    candidates={this.state.candidates}
                    filter={undefined}
                />
                <Table
                    tableTitle="JS Candidates:"
                    nameHeader={nameHeader}
                    skillsHeader={skillsHeader}
                    filterCandidateBySkill={this.filterCandidateBySkill}
                    candidates={this.state.candidates}
                    filter="JavaScript"
                />
                <Table
                    tableTitle="AWS Candidates:"
                    nameHeader={nameHeader}
                    skillsHeader={skillsHeader}
                    filterCandidateBySkill={this.filterCandidateBySkill}
                    candidates={this.state.candidates}
                    filter="AWS"
                />
                <Table
                    tableTitle="Docker Candidates:"
                    nameHeader={nameHeader}
                    skillsHeader={skillsHeader}
                    filterCandidateBySkill={this.filterCandidateBySkill}
                    candidates={this.state.candidates}
                    filter="Docker" />
            </div>
        );
    }
}
