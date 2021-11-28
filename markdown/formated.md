### **URL**

  **_/formated_**

* **Method:**

  `GET`

    ----
  
*  **URL Requirements**

    ----
    ----

    ### **GET**
    <br />
 
    **Example :**

   `/formated`


    <br />

    _**Header**:_

    ```json
        {
            "authorization": "authorization_token"
        }
    ```

    <br />

    ----

    ### **Success :**

    * **Code:** 200 <br />
      **Content:** `{ "formated" : "..." },`

    ### **Unauthorized :**

    * **Code:** 401 <br />
      **Content:** `{ message: Unauthorized }`
 
    ### **Error :**

    * **Code:** 500 <br />
      **Content:** `{ error: Internal server Error. }`

    <br />

    ----
    ----