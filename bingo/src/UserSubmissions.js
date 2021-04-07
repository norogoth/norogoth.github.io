import React, {useState, useEffect} from 'react';

export default function UserSubmissions() {
    return (
      <div id="userSubmissions">
        <h1>User Submissions</h1>
        <p>Here you can submit your own bingo values. Hopefully some day I can get upvoting and downvoting options as well.</p>
        <table>
          <tr>
            <th>name</th>
            <th>upvotes</th>
          </tr>
        </table>
      </div>
    )
    }  