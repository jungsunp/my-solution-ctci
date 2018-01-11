
-- Q: Display name and location of all departments excpet for ones in Dallas with the highest number of emplyoees

CREATE TABLE department
( DEPARTMENT_ID 	INTEGER	PRIMARY KEY,
  DEPARTMENT_NAME 	TEXT 	NOT NULL UNIQUE,
  LOCATION  TEXT 	NOT NULL,
  NUMBER_EMPLOYEES INTEGER DEFAULT NULL
  );

INSERT INTO department
VALUES (1, 'ACCOUNTING', 'NEW YORK', 3);
INSERT INTO department
VALUES (2, 'EXECUTIVE', 'NEW YORK', 4);
INSERT INTO department
VALUES (3, 'IT', 'DALLAS', 5);
INSERT INTO department
VALUES (4, 'MARKETING', 'CHICAGO', 0);
INSERT INTO department
VALUES (5, 'RESEARCH', 'DALLAS', 3);
INSERT INTO department
VALUES (6, 'SALES', 'CHICAGO', 4);

---example from class---

SELECT 	d.department_id, d.department_name, COUNT(*) Num
FROM 		department d
INNER JOIN 	employee e
ON 		d.department_id = e.department_id
WHERE d.location != 'DALLAS'
GROUP BY 	d.department_id, d.department_name
HAVING 	COUNT(*) > (SELECT 	MIN(COUNT(*))
 	FROM 		employee
 	WHERE 	department_id IS NOT NULL
 	GROUP BY 	department_id)
ORDER BY 	department_id;

--- MY Solutioㅜ

SELECT d1.DEPARTMENT_NAME, d1.LOCATION
FROM department d1
WHERE d1.NUMBER_EMPLOYEES = (
  SELECT MAX(NUMBER_EMPLOYEES)
  FROM department d2
  WHERE d2.LOCATION != 'DALLAS'
);
