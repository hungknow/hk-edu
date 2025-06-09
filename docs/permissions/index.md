This is the service to manage the permission of the user to the objects related to the courses, lessons.

List of roles in the system
- Admin
- Editor
- Guest

List of target objects
- Course
- Lesson of course
- Files of the lesson
- File of the course

| Target objects      | Actions | Admin | Editor | Guest |
| :-------------      | ------: | :---: | :----: | :---: |
| Course              | View | o | o | o |
|                     | Create new | o | x | x |
| Lesson of course | | ✔️ | ✔️ | ❌ |
| Files of the lesson |  | ✔️ | ✔️ | ❌ |
| File of the course |  | ✔️ | ✔️ | ❌ |


## Roles and Permissions matrix
<table>
<thead>
<tr>
<th>Target objects</th>
<th>Actions</th>
<th>Admin</th>
<th>Editor</th>
<th>Guest</th>
</tr>
</thead>
<tbody>
<tr>
<td>Course</td>
<td>View</td>
<td>o</td>
<td>o</td>
<td>o</td>
</tr>
<tr>
<td>Course</td>
<td>Create new</td>
<td>o</td>
<td>x</td>
<td>x</td>
</tr>
</tbody>
</table>

Each role include 
- The Type of role.
- ID of the role

The name of actions
- `view`
- `create`
- `update`
- `delete`

The target objects include
- Type of target object. The valid type is `course`, `lesson of course`
- ID of target object
