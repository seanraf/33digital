export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      _posts_v: {
        Row: {
          created_at: string
          id: number
          latest: boolean | null
          parent_id: number | null
          updated_at: string
          version__status:
            | Database["public"]["Enums"]["enum__posts_v_version_status"]
            | null
          version_content: Json | null
          version_created_at: string | null
          version_excerpt: string | null
          version_feature_image_id: number | null
          version_published_at: string | null
          version_reading_time: number | null
          version_slug: string | null
          version_slug_lock: boolean | null
          version_status:
            | Database["public"]["Enums"]["enum__posts_v_version_status"]
            | null
          version_title: string | null
          version_updated_at: string | null
        }
        Insert: {
          created_at?: string
          id?: number
          latest?: boolean | null
          parent_id?: number | null
          updated_at?: string
          version__status?:
            | Database["public"]["Enums"]["enum__posts_v_version_status"]
            | null
          version_content?: Json | null
          version_created_at?: string | null
          version_excerpt?: string | null
          version_feature_image_id?: number | null
          version_published_at?: string | null
          version_reading_time?: number | null
          version_slug?: string | null
          version_slug_lock?: boolean | null
          version_status?:
            | Database["public"]["Enums"]["enum__posts_v_version_status"]
            | null
          version_title?: string | null
          version_updated_at?: string | null
        }
        Update: {
          created_at?: string
          id?: number
          latest?: boolean | null
          parent_id?: number | null
          updated_at?: string
          version__status?:
            | Database["public"]["Enums"]["enum__posts_v_version_status"]
            | null
          version_content?: Json | null
          version_created_at?: string | null
          version_excerpt?: string | null
          version_feature_image_id?: number | null
          version_published_at?: string | null
          version_reading_time?: number | null
          version_slug?: string | null
          version_slug_lock?: boolean | null
          version_status?:
            | Database["public"]["Enums"]["enum__posts_v_version_status"]
            | null
          version_title?: string | null
          version_updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "_posts_v_parent_id_posts_id_fk"
            columns: ["parent_id"]
            isOneToOne: false
            referencedRelation: "posts"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "_posts_v_version_feature_image_id_media_id_fk"
            columns: ["version_feature_image_id"]
            isOneToOne: false
            referencedRelation: "media"
            referencedColumns: ["id"]
          },
        ]
      }
      _posts_v_rels: {
        Row: {
          id: number
          order: number | null
          parent_id: number
          path: string
          tags_id: number | null
          users_id: number | null
        }
        Insert: {
          id?: number
          order?: number | null
          parent_id: number
          path: string
          tags_id?: number | null
          users_id?: number | null
        }
        Update: {
          id?: number
          order?: number | null
          parent_id?: number
          path?: string
          tags_id?: number | null
          users_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "_posts_v_rels_parent_fk"
            columns: ["parent_id"]
            isOneToOne: false
            referencedRelation: "_posts_v"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "_posts_v_rels_tags_fk"
            columns: ["tags_id"]
            isOneToOne: false
            referencedRelation: "tags"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "_posts_v_rels_users_fk"
            columns: ["users_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      media: {
        Row: {
          alt: string
          created_at: string
          filename: string | null
          filesize: number | null
          focal_x: number | null
          focal_y: number | null
          height: number | null
          id: number
          mime_type: string | null
          thumbnail_u_r_l: string | null
          updated_at: string
          url: string | null
          width: number | null
        }
        Insert: {
          alt: string
          created_at?: string
          filename?: string | null
          filesize?: number | null
          focal_x?: number | null
          focal_y?: number | null
          height?: number | null
          id?: number
          mime_type?: string | null
          thumbnail_u_r_l?: string | null
          updated_at?: string
          url?: string | null
          width?: number | null
        }
        Update: {
          alt?: string
          created_at?: string
          filename?: string | null
          filesize?: number | null
          focal_x?: number | null
          focal_y?: number | null
          height?: number | null
          id?: number
          mime_type?: string | null
          thumbnail_u_r_l?: string | null
          updated_at?: string
          url?: string | null
          width?: number | null
        }
        Relationships: []
      }
      payload_locked_documents: {
        Row: {
          created_at: string
          global_slug: string | null
          id: number
          updated_at: string
        }
        Insert: {
          created_at?: string
          global_slug?: string | null
          id?: number
          updated_at?: string
        }
        Update: {
          created_at?: string
          global_slug?: string | null
          id?: number
          updated_at?: string
        }
        Relationships: []
      }
      payload_locked_documents_rels: {
        Row: {
          id: number
          media_id: number | null
          order: number | null
          parent_id: number
          path: string
          posts_id: number | null
          tags_id: number | null
          users_id: number | null
        }
        Insert: {
          id?: number
          media_id?: number | null
          order?: number | null
          parent_id: number
          path: string
          posts_id?: number | null
          tags_id?: number | null
          users_id?: number | null
        }
        Update: {
          id?: number
          media_id?: number | null
          order?: number | null
          parent_id?: number
          path?: string
          posts_id?: number | null
          tags_id?: number | null
          users_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "payload_locked_documents_rels_media_fk"
            columns: ["media_id"]
            isOneToOne: false
            referencedRelation: "media"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "payload_locked_documents_rels_parent_fk"
            columns: ["parent_id"]
            isOneToOne: false
            referencedRelation: "payload_locked_documents"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "payload_locked_documents_rels_posts_fk"
            columns: ["posts_id"]
            isOneToOne: false
            referencedRelation: "posts"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "payload_locked_documents_rels_tags_fk"
            columns: ["tags_id"]
            isOneToOne: false
            referencedRelation: "tags"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "payload_locked_documents_rels_users_fk"
            columns: ["users_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      payload_migrations: {
        Row: {
          batch: number | null
          created_at: string
          id: number
          name: string | null
          updated_at: string
        }
        Insert: {
          batch?: number | null
          created_at?: string
          id?: number
          name?: string | null
          updated_at?: string
        }
        Update: {
          batch?: number | null
          created_at?: string
          id?: number
          name?: string | null
          updated_at?: string
        }
        Relationships: []
      }
      payload_preferences: {
        Row: {
          created_at: string
          id: number
          key: string | null
          updated_at: string
          value: Json | null
        }
        Insert: {
          created_at?: string
          id?: number
          key?: string | null
          updated_at?: string
          value?: Json | null
        }
        Update: {
          created_at?: string
          id?: number
          key?: string | null
          updated_at?: string
          value?: Json | null
        }
        Relationships: []
      }
      payload_preferences_rels: {
        Row: {
          id: number
          order: number | null
          parent_id: number
          path: string
          users_id: number | null
        }
        Insert: {
          id?: number
          order?: number | null
          parent_id: number
          path: string
          users_id?: number | null
        }
        Update: {
          id?: number
          order?: number | null
          parent_id?: number
          path?: string
          users_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "payload_preferences_rels_parent_fk"
            columns: ["parent_id"]
            isOneToOne: false
            referencedRelation: "payload_preferences"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "payload_preferences_rels_users_fk"
            columns: ["users_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      posts: {
        Row: {
          _status: Database["public"]["Enums"]["enum_posts_status"] | null
          content: Json | null
          created_at: string
          excerpt: string | null
          feature_image_id: number | null
          id: number
          published_at: string | null
          reading_time: number | null
          slug: string | null
          slug_lock: boolean | null
          status: Database["public"]["Enums"]["enum_posts_status"] | null
          title: string | null
          updated_at: string
        }
        Insert: {
          _status?: Database["public"]["Enums"]["enum_posts_status"] | null
          content?: Json | null
          created_at?: string
          excerpt?: string | null
          feature_image_id?: number | null
          id?: number
          published_at?: string | null
          reading_time?: number | null
          slug?: string | null
          slug_lock?: boolean | null
          status?: Database["public"]["Enums"]["enum_posts_status"] | null
          title?: string | null
          updated_at?: string
        }
        Update: {
          _status?: Database["public"]["Enums"]["enum_posts_status"] | null
          content?: Json | null
          created_at?: string
          excerpt?: string | null
          feature_image_id?: number | null
          id?: number
          published_at?: string | null
          reading_time?: number | null
          slug?: string | null
          slug_lock?: boolean | null
          status?: Database["public"]["Enums"]["enum_posts_status"] | null
          title?: string | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "posts_feature_image_id_media_id_fk"
            columns: ["feature_image_id"]
            isOneToOne: false
            referencedRelation: "media"
            referencedColumns: ["id"]
          },
        ]
      }
      posts_rels: {
        Row: {
          id: number
          order: number | null
          parent_id: number
          path: string
          tags_id: number | null
          users_id: number | null
        }
        Insert: {
          id?: number
          order?: number | null
          parent_id: number
          path: string
          tags_id?: number | null
          users_id?: number | null
        }
        Update: {
          id?: number
          order?: number | null
          parent_id?: number
          path?: string
          tags_id?: number | null
          users_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "posts_rels_parent_fk"
            columns: ["parent_id"]
            isOneToOne: false
            referencedRelation: "posts"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "posts_rels_tags_fk"
            columns: ["tags_id"]
            isOneToOne: false
            referencedRelation: "tags"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "posts_rels_users_fk"
            columns: ["users_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      tags: {
        Row: {
          created_at: string
          id: number
          name: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          id?: number
          name: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          id?: number
          name?: string
          updated_at?: string
        }
        Relationships: []
      }
      users: {
        Row: {
          created_at: string
          email: string
          hash: string | null
          id: number
          lock_until: string | null
          login_attempts: number | null
          reset_password_expiration: string | null
          reset_password_token: string | null
          salt: string | null
          updated_at: string
        }
        Insert: {
          created_at?: string
          email: string
          hash?: string | null
          id?: number
          lock_until?: string | null
          login_attempts?: number | null
          reset_password_expiration?: string | null
          reset_password_token?: string | null
          salt?: string | null
          updated_at?: string
        }
        Update: {
          created_at?: string
          email?: string
          hash?: string | null
          id?: number
          lock_until?: string | null
          login_attempts?: number | null
          reset_password_expiration?: string | null
          reset_password_token?: string | null
          salt?: string | null
          updated_at?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      enum__posts_v_version_status: "draft" | "published"
      enum_posts_status: "draft" | "published"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DefaultSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      enum__posts_v_version_status: ["draft", "published"],
      enum_posts_status: ["draft", "published"],
    },
  },
} as const
