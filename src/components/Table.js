import React from "react";

const Table = (props) => (
    <div id="container">
        <h2 className="table-title">{props.tableTitle}</h2>
        <table className="candidates" id="candidates_example">
            <thead>
                <tr>
                    <th>{props.nameHeader}</th>
                    <th>{props.skillsHeader}</th>
                </tr>
            </thead>
            <tbody>
                {props.filterCandidateBySkill(props.candidates, props.filter)}
            </tbody>
        </table>
    </div>
);

export default Table;
