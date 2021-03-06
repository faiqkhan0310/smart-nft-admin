/* eslint-disable */

export const addAdmin = async (body) => {
  try {
    const res = await fetch("/api/admins/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    const userObj = await res.json();
    return userObj;
  } catch (error) {
    console.log(error);
    return error;
  }
};
export const updateAdmin = async (id, body) => {
  try {
    console.log(id, body);
    const res = await fetch(`/api/admins/${id}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    const userObj = await res.json();
    return userObj;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const getAdmins = async (body) => {
  try {
    const res = await fetch("/api/admins", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    const userObj = await res.json();
    return userObj;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const getOneAdmin = async (id) => {
  try {
    const res = await fetch(`/api/admins/${id}`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });

    const userObj = await res.json();
    return userObj;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const delAdmin = async (id) => {
  try {
    const res = await fetch(`/api/admins/${id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    });

    const userObj = await res.json();
    return userObj;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const changeAdminStatus = async (id, body) => {
  try {
    const res = await fetch(`/api/admins/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    const userObj = await res.json();
    return userObj;
  } catch (error) {
    console.log(error);
    return error;
  }
};
