import { useState } from "react";
import { View } from "react-native";
import { Menu, Divider, PaperProvider } from "react-native-paper";
import Button from "./Button";

const OrderBy = ({ orderBy, setOrderBy }) => {
  const [visible, setVisible] = useState(false);

  const openMenu = () => setVisible(true);

  const closeMenu = () => setVisible(false);

  const options = [
    {
      label: "Latest repositories",
      value: {
        orderBy: "CREATED_AT",
        orderDirection: "DESC",
      },
    },
    {
      label: "Highest rated repositories",
      value: {
        orderBy: "RATING_AVERAGE",
        orderDirection: "DESC",
      },
    },
    {
      label: "Lowest rated repositories",
      value: {
        orderBy: "RATING_AVERAGE",
        orderDirection: "ASC",
      },
    },
  ];
  const selectedOption = options.find(
    (option) =>
      option.value.orderBy === orderBy.orderBy &&
      option.value.orderDirection === orderBy.orderDirection
  );

  const onPress = (value) => {
    setOrderBy(value);
    closeMenu();
  };

  return (
    <View
      style={{
        flexDirection: "row",
        margin: 10,
      }}
    >
      <Menu
        visible={visible}
        onDismiss={closeMenu}
        anchor={
          <Button
            text={selectedOption?.label ?? "Order by"}
            onPress={openMenu}
          />
        }
      >
        {options.map((option, index) => (
          <View key={option.label}>
            <Menu.Item
              onPress={() => onPress(option.value)}
              title={option.label}
            />
            {index < options.length - 1 && <Divider />}
          </View>
        ))}
      </Menu>
    </View>
  );
};

export default OrderBy;
