import MovieCard from "@/components/MovieCard";
import SearchBar from "@/components/SearchBar";
import TrendingMovieCard from "@/components/TrendingMovieCard";
import { icons } from "@/constants/icons";
import { images } from "@/constants/images";
import { fetchMovies } from "@/services/api";
import { getTrendingMovies } from "@/services/appWrite";
import useFetch from "@/services/useFetch";
import { useRouter } from "expo-router";
import { ActivityIndicator, FlatList, Image, Text, View } from "react-native";

export default function Index() {
  const router = useRouter();

  const {
    data: movies,
    loading,
    error,
  } = useFetch(() => fetchMovies({ query: "" }));

  const {
    data: trendingMovies,
    loading: trendingLoading,
    error: trendingError,
  } = useFetch(() => getTrendingMovies());

  return (
    <View className="flex-1 bg-primary ">
      <Image source={images.bg} className="absolute w-full z-0" />

      <Image source={icons.logo} className="w-12 h-10 mt-20 mb-5 mx-auto" />

      <View className="my-5">
        <SearchBar
          onPress={() => router.push("/search")}
          placeholder="Search a movie"
          value=""
        />
        {trendingMovies && trendingMovies.length && (
          <View className="mt-10">
            <Text className="text-lg text-white font-bold mb-3">
              Trending Movies
            </Text>

            <FlatList
              horizontal
              showsHorizontalScrollIndicator={false}
              ItemSeparatorComponent={() => <View className="w-4" />}
              data={trendingMovies}
              renderItem={({ item, index }) => (
                <TrendingMovieCard movie={item} index={index} />
              )}
              keyExtractor={(item) => item.movie_id.toString()}
            />
          </View>
        )}
      </View>

      {loading || trendingLoading ? (
        <ActivityIndicator size={"large"} color={"#0000ff"} className="my-3" />
      ) : error || trendingError ? (
        <Text className="text-lg text-red-500 my-3 px-5">
          {error?.message || trendingError?.message}
        </Text>
      ) : (
        <View className="flex-1 mt-5">
          <>
            <Text className="text-lg text-white font-bold mt-5 mb-3">
              Latest Movies
            </Text>

            <FlatList
              data={movies}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({ item }) => <MovieCard {...item} />}
              numColumns={3}
              scrollEnabled={false}
              columnWrapperStyle={{
                justifyContent: "flex-start",
                gap: 20,
                paddingRight: 5,
                marginBottom: 10,
              }}
              className="mt-2 pb-32"
            />
          </>
        </View>
      )}
    </View>
  );
}
