import { jsxs, jsx } from "react/jsx-runtime";
import "react";
import { A as AuthenticatedLayout } from "./AuthenticatedLayout-Dc4O-RCd.js";
import { C as Container, B as Button } from "./Button-C2oJstgM.js";
import { usePage, useForm, Head } from "@inertiajs/react";
import { C as Card, I as Input } from "./Card-CAZfg7KG.js";
import { C as Checkbox } from "./Checkbox-D7f6PPTN.js";
import Swal from "sweetalert2";
import "./ApplicationLogo-xMpxFOcX.js";
import "@headlessui/react";
import "@tabler/icons-react";
function Edit({ auth }) {
  const { permissions, role } = usePage().props;
  const { data, setData, post, errors } = useForm({
    name: role.name,
    selectedPermissions: role.permissions.map(
      (permission) => permission.name
    ),
    _method: "put"
  });
  const handleSelectedPermissions = (e) => {
    let items = data.selectedPermissions;
    if (items.includes(e.target.value))
      items.splice(items.indexOf(e.target.value), 1);
    else items.push(e.target.value);
    setData("selectedPermissions", items);
  };
  const handleUpdatedata = async (e) => {
    e.preventDefault();
    post(route("roles.update", role.id), {
      onSuccess: () => {
        Swal.fire({
          title: "Success!",
          text: "Data created successfully!",
          icon: "success",
          showConfirmButton: false,
          timer: 1500
        });
      }
    });
  };
  return /* @__PURE__ */ jsxs(
    AuthenticatedLayout,
    {
      user: auth.user,
      header: /* @__PURE__ */ jsx("h2", { className: "font-semibold text-xl text-gray-800 leading-tight", children: "Edit Role" }),
      children: [
        /* @__PURE__ */ jsx(Head, { title: "Edit Roles" }),
        /* @__PURE__ */ jsx(Container, { children: /* @__PURE__ */ jsx(Card, { title: "Edit role", children: /* @__PURE__ */ jsxs("form", { onSubmit: handleUpdatedata, children: [
          /* @__PURE__ */ jsx("div", { className: "mb-4", children: /* @__PURE__ */ jsx(
            Input,
            {
              label: "Role Name",
              type: "text",
              value: data.name,
              onChange: (e) => setData("name", e.target.value),
              errors: errors.name,
              placeholder: "Input role name.."
            }
          ) }),
          /* @__PURE__ */ jsx("div", { className: "mb-4", children: /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 gap-4", children: Object.entries(permissions).map(
            ([group, permissionItems], i) => /* @__PURE__ */ jsxs(
              "div",
              {
                className: "p-4 bg-white rounded-lg shadow-md",
                children: [
                  /* @__PURE__ */ jsx("h3", { className: "font-bold text-lg mb-2", children: group }),
                  /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-2", children: permissionItems.map(
                    (permission) => /* @__PURE__ */ jsx(
                      Checkbox,
                      {
                        label: permission,
                        value: permission,
                        onChange: handleSelectedPermissions,
                        defaultChecked: data.selectedPermissions.includes(
                          permission
                        )
                      },
                      permission
                    )
                  ) }),
                  (errors == null ? void 0 : errors.selectedPermissions) && /* @__PURE__ */ jsx("div", { className: "text-xs text-red-500 mt-4", children: errors.selectedPermissions })
                ]
              },
              i
            )
          ) }) }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsx(Button, { type: "submit" }),
            /* @__PURE__ */ jsx(
              Button,
              {
                type: "cancel",
                url: route("roles.index")
              }
            )
          ] })
        ] }) }) })
      ]
    }
  );
}
export {
  Edit as default
};
