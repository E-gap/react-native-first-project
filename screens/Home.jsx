import { StyleSheet, TouchableOpacity } from "react-native";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import PostsScreen from "./PostsScreen";
import CreatePostsScreen from "./CreatePostsScreen";
import ProfileScreen from "./ProfileScreen";

import { Feather } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

import { logout } from "../redux/auth/authOperations";

import {
  userOffProfileScreen,
  userOnProfileScreen,
} from "../redux/auth/authReduser";

const Tab = createBottomTabNavigator();

export default function Home() {
  const [displayTabBar, setDisplayTabBar] = useState(true);
  const dispatch = useDispatch();
  const { userOnProfile } = useSelector((state) => state.auth);

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          paddingTop: 9,
          paddingLeft: 93,
          paddingRight: 93,
          display: displayTabBar ? "flex" : "none",
        },
      }}
    >
      <Tab.Screen
        name="PostsScreen"
        listeners={{
          tabPress: () => {
            dispatch(userOffProfileScreen());
          },
        }}
        component={PostsScreen}
        options={() => ({
          headerTitleAlign: "center",
          tabBarShowLabel: false,
          tabBarIcon: ({ focused, size, color }) => {
            return <Feather name="grid" size={size} color={color} />;
          },
          headerRight: () => (
            <TouchableOpacity style={styles.logOut}>
              <Feather
                name="log-out"
                size={24}
                color="#BDBDBD"
                onPress={() => {
                  dispatch(logout());
                }}
              />
            </TouchableOpacity>
          ),
        })}
      />
      {!userOnProfile ? (
        <>
          <Tab.Screen
            name="CreatePostsScreen"
            listeners={{
              tabPress: () => {
                setDisplayTabBar(false);
                dispatch(userOffProfileScreen());
              },
            }}
            component={CreatePostsScreen}
            options={({ navigation }) => ({
              headerTitleAlign: "center",
              tabBarShowLabel: false,
              tabBarIcon: ({ size, color }) => {
                return <AntDesign name="plus" size={size} color={color} />;
              },
              headerLeft: () => (
                <TouchableOpacity style={styles.goBack}>
                  <Ionicons
                    name="arrow-back"
                    size={24}
                    color="#BDBDBD"
                    onPress={() => {
                      navigation.goBack();
                      setDisplayTabBar(true);
                    }}
                  />
                </TouchableOpacity>
              ),
              tabBarItemStyle: {
                backgroundColor: "#FF6C00",
                borderRadius: 20,
              },
              tabBarActiveTintColor: "white",
            })}
          />
          <Tab.Screen
            name="ProfileScreen"
            listeners={{
              tabPress: () => {
                dispatch(userOnProfileScreen());
              },
            }}
            component={ProfileScreen}
            options={{
              headerTitleAlign: "center",
              tabBarShowLabel: false,
              tabBarIcon: ({ focused, size, color }) => {
                return <Feather name="user" size={size} color={color} />;
              },
            }}
          />
        </>
      ) : (
        <>
          <Tab.Screen
            name="ProfileScreen"
            listeners={{
              tabPress: () => {
                dispatch(userOnProfileScreen());
              },
            }}
            component={ProfileScreen}
            options={{
              headerTitleAlign: "center",
              tabBarShowLabel: false,
              tabBarIcon: ({ focused, size, color }) => {
                return <Feather name="user" size={size} color={color} />;
              },
              tabBarItemStyle: {
                backgroundColor: "#FF6C00",
                borderRadius: 20,
              },
              tabBarActiveTintColor: "white",
            }}
          />
          <Tab.Screen
            name="CreatePostsScreen"
            listeners={{
              tabPress: () => {
                setDisplayTabBar(false);
                dispatch(userOffProfileScreen());
              },
            }}
            component={CreatePostsScreen}
            options={({ navigation }) => ({
              headerTitleAlign: "center",
              tabBarShowLabel: false,
              tabBarIcon: ({ size, color }) => {
                return <AntDesign name="plus" size={size} color={color} />;
              },
              headerLeft: () => (
                <TouchableOpacity style={styles.goBack}>
                  <Ionicons
                    name="arrow-back"
                    size={24}
                    color="#BDBDBD"
                    onPress={() => {
                      navigation.goBack();
                      setDisplayTabBar(true);
                    }}
                  />
                </TouchableOpacity>
              ),
            })}
          />
        </>
      )}
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red",
    justifyContent: "center",
  },
  login: {
    paddingLeft: 80,
    paddingRight: 80,
    textAlign: "center",
  },
  title: {
    marginBottom: 33,
    fontSize: 30,
    paddingTop: 32,
    textAlign: "center",
  },

  line: {
    width: 134,
    height: 5,
    backgroundColor: "#212121",
    position: "absolute",
    bottom: 8,
    left: "50%",
    transform: [{ translateX: -67 }],
    borderRadius: 100,
  },
  logOut: {
    marginRight: 20,
  },
  goBack: {
    marginLeft: 20,
  },
});
