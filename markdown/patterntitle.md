### **URL**

  **_/patterntitle_**

* **Method:**

  `GET`

    ----
  
*  **URL Requirements**

    ----
    ----

    ### **GET**
    <br />
 
    **Example :**

   `/patterntitle`


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
      **Content:** `{ "titlePattern" : [...] },`

    ### **Unauthorized :**

    * **Code:** 401 <br />
      **Content:** `{ message: Unauthorized }`
 
    ### **Error :**

    * **Code:** 500 <br />
      **Content:** `{ error: Internal server Error. }`

    <br />

    ----
    ----